package br.com.saper.qenem.services;

import br.com.saper.qenem.dtos.*;
import br.com.saper.qenem.enums.MateriaEnum;
import br.com.saper.qenem.exceptions.ConflictStoreException;
import br.com.saper.qenem.models.*;
import br.com.saper.qenem.repositories.QuestaoRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class QuestaoService {

    @Autowired
    private QuestaoRepository questaoRepository;

    public ResponseEntity<Object> findAll(String materia, Boolean certificada) {
        // Quando o atributo certificada vem null, ele retorna apenas as questões que não foram certificadas ainda.
        Integer certificadaInteger = null;
        if (certificada == null) {
            certificadaInteger = -1;
        } else if (certificada){
            certificadaInteger = 1;
        } else if (!certificada) {
            certificadaInteger = 0;
        }

        List<QuestaoResponseDTO> questoes = questaoRepository.findAll(materia, certificadaInteger).stream().map(
                (questao -> new QuestaoResponseDTO(questao))
        ).toList();
        System.out.println("Número de questões: " + questoes.size());
        return ResponseEntity.status(HttpStatus.OK)
                    .body(questoes);
    }

    public ResponseEntity<Object> findAllOrderByMaisAcessadas(String materia) {
        return ResponseEntity.status(HttpStatus.OK)
                .body(questaoRepository.findAllOrderByMaisAcessadas(materia).stream().map(
                        (questao -> new QuestaoResponseDTO(questao))
                ).toList());
    }

    @Transactional
    public ResponseEntity<Object> save(QuestaoRequestDTO questaoRequestDTO) {

        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if ((principal instanceof Usuario usuario) && usuario.getProfessor() != null ) {

            if (questaoRequestDTO.getItensQuestao().size() != 5) {
                throw new ConflictStoreException("A quantidade de itens de uma questão tem que ser 5");
            }

            Questao questao = new Questao();
            questao.setProfessor(usuario.getProfessor());
            questao.setMateria(MateriaEnum.valueOf(questaoRequestDTO.getMateria()));
            questao.setEnunciado(questaoRequestDTO.getEnunciado());
            questao.setNumeroAcessos(Long.valueOf(0));
            questao.setCertificada(null);

            for (ItemQuestaoRequestDTO item : questaoRequestDTO.getItensQuestao()) {
                ItemQuestao itemQuestao = new ItemQuestao();
                itemQuestao.setTexto(item.getTexto());
                itemQuestao.setCorreto(item.isCorreto());
                itemQuestao.setQuestao(questao);
                questao.getItensQuestao().add(itemQuestao);
            }

            return ResponseEntity.status(HttpStatus.CREATED)
                    .body(new QuestaoResponseDTO(questaoRepository.save(questao)));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

    }

    @Transactional
    public ResponseEntity<Object> certificar(Long id, Boolean certificada) {
        Questao questao = questaoRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Questão não encontrada"));

        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if ((principal instanceof Usuario usuario)
                && usuario.getProfessor() != null && usuario.getProfessor().isCertificador() ) {

            if (!questao.getProfessor().getId().equals(usuario.getProfessor().getId())) {
                questao.setCertificada(certificada);
                questaoRepository.save(questao);
            } else {
                throw new NoSuchElementException("Professor não pode validar uma questão criada por ele mesmo");
            }

            return ResponseEntity.status(HttpStatus.OK).build();
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

    }

    @Transactional
    public ResponseEntity<Object> incrementaNumeroAcessos(Long id) {
        Questao questao = questaoRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Questão não encontrada"));

        questao.setNumeroAcessos(questao.getNumeroAcessos()+1);
        questaoRepository.save(questao);

        return ResponseEntity.status(HttpStatus.OK).build();
    }

}
