package br.com.saper.qenem.services;

import br.com.saper.qenem.dtos.ProvaResponseDTO;
import br.com.saper.qenem.enums.MateriaEnum;
import br.com.saper.qenem.models.Prova;
import br.com.saper.qenem.models.Questao;
import br.com.saper.qenem.models.Usuario;
import br.com.saper.qenem.repositories.ProvaRepository;
import br.com.saper.qenem.repositories.QuestaoRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ProvaService {

    @Autowired
    private ProvaRepository provaRepository;

    @Autowired
    private QuestaoRepository questaoRepository;

    public ResponseEntity<Object> findById(Long id) {
        Prova prova = provaRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Prova não encontrada"));

        return ResponseEntity.status(HttpStatus.OK).body(new ProvaResponseDTO(prova));
    }

    public ResponseEntity<Object> findAll(String materia) {

        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if ((principal instanceof Usuario usuario) && usuario.getAluno() != null ) {
            if (materia.isBlank()) {
                return ResponseEntity.status(HttpStatus.OK)
                        .body(provaRepository.findAllByAlunoId(usuario.getAluno().getId()).stream().map(
                                (prova -> new ProvaResponseDTO(prova))
                        ).toList());
            } else {
                return ResponseEntity.status(HttpStatus.OK)
                        .body(provaRepository.findAllByAlunoIdAndMateria(usuario.getAluno().getId(), MateriaEnum.valueOf(materia)).stream().map(
                                (prova -> new ProvaResponseDTO(prova))
                        ).toList());
            }
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @Transactional
    public ResponseEntity<Object> gerarProva(String materia, Integer numeroQuestoes) {

        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if ((principal instanceof Usuario usuario) && usuario.getAluno() != null ) {

            if (materia.isBlank()) {
                throw new NoSuchElementException("Matéria não existe");
            } else {
                List<Questao> todasQuestoes = questaoRepository.findAll(materia, 1);

                Set<Questao> questoesEscolhidas = getQuestoesAleatorias(todasQuestoes, numeroQuestoes);

                Prova prova = new Prova();
                prova.setAluno(usuario.getAluno());
                prova.setMateria(MateriaEnum.valueOf(materia));
                prova.setQuestoes(questoesEscolhidas);
                prova.setNota(null);
                prova.setResolvida(false);

                return ResponseEntity.status(HttpStatus.CREATED)
                        .body(new ProvaResponseDTO(provaRepository.save(prova)));
            }

        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @Transactional
    public ResponseEntity<Object> salvarNota(Long id, Double nota) {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if ((principal instanceof Usuario usuario) && usuario.getAluno() != null ) {
            Prova prova = provaRepository.findById(id)
                    .orElseThrow(() -> new NoSuchElementException("Prova não encontrada"));

            if (usuario.getAluno().getId().equals(prova.getAluno().getId())) {

                if (!prova.isResolvida()) {
                    prova.setNota(nota);
                    prova.setResolvida(true);
                    provaRepository.save(prova);

                    return ResponseEntity.status(HttpStatus.OK).build();
                } else {
                    throw new NoSuchElementException("Essa prova já foi feita");
                }

            } else {
                throw new NoSuchElementException("Prova não pertence ao aluno");
            }

        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

    }

    private Set<Questao> getQuestoesAleatorias(List<Questao> questoes, int numeroQuestoes) {
        Random rand = new Random();
        Set<Questao> questoesEscolhidas = new HashSet<>();

        for (int i = 0; i < numeroQuestoes; i++) {
            int randomIndex = rand.nextInt(questoes.size());
            questoesEscolhidas.add(questoes.get(randomIndex));
            questoes.remove(randomIndex);
        }

        return questoesEscolhidas;
    }
}
