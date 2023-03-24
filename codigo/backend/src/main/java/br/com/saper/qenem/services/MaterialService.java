package br.com.saper.qenem.services;

import br.com.saper.qenem.dtos.*;
import br.com.saper.qenem.enums.MateriaEnum;
import br.com.saper.qenem.exceptions.ConflictStoreException;
import br.com.saper.qenem.models.Material;
import br.com.saper.qenem.models.Usuario;
import br.com.saper.qenem.repositories.MaterialRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.NoSuchElementException;

@Service
public class MaterialService {

    @Autowired
    private MaterialRepository materialRepository;

    public ResponseEntity<Object> findAll(String materia) {

        if (materia.isBlank()) {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(materialRepository.findAll().stream().map(
                            (material -> new MaterialResponseDTO(material))
                    ).toList());
        } else {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(materialRepository.findAllByMateria(MateriaEnum.valueOf(materia)).stream().map(
                            (material -> new MaterialResponseDTO(material))
                    ).toList());
        }
    }

    public ResponseEntity<Object> findAllOrderByMaisAcessados(String materia) {
        return ResponseEntity.status(HttpStatus.OK)
                .body(materialRepository.findAllOrderByMaisAcessados(materia).stream().map(
                        (material -> new MaterialResponseDTO(material))
                ).toList());
    }

    @Transactional
    public ResponseEntity<Object> save(MaterialRequestDTO materialRequestDTO) {

        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if ((principal instanceof Usuario usuario) && usuario.getProfessor() != null ) {

            if (materialRepository.existsByNomeArquivo(materialRequestDTO.getNomeArquivo())) {
                throw new ConflictStoreException("Nome do arquivo já existe");
            }

            Material material = new Material();
            material.setProfessor(usuario.getProfessor());
            material.setMateria(MateriaEnum.valueOf(materialRequestDTO.getMateria()));
            material.setTitulo(materialRequestDTO.getTitulo());
            material.setDescricao(materialRequestDTO.getDescricao());
            material.setNomeArquivo(materialRequestDTO.getNomeArquivo());
            material.setNumeroAcessos(Long.valueOf(0));

            return ResponseEntity.status(HttpStatus.CREATED)
                    .body(new MaterialResponseDTO(materialRepository.save(material)));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @Transactional
    public ResponseEntity<Object> incrementaNumeroAcessos(Long id) {
        Material material = materialRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Material não encontrado"));

        material.setNumeroAcessos(material.getNumeroAcessos()+1);
        materialRepository.save(material);

        return ResponseEntity.status(HttpStatus.OK).build();
    }
}
