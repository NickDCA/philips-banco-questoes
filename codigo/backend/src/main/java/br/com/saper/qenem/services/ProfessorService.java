package br.com.saper.qenem.services;

import br.com.saper.qenem.dtos.*;
import br.com.saper.qenem.enums.RoleNames;
import br.com.saper.qenem.exceptions.ConflictStoreException;
import br.com.saper.qenem.models.Professor;
import br.com.saper.qenem.models.Role;
import br.com.saper.qenem.models.Usuario;
import br.com.saper.qenem.repositories.ProfessorRepository;
import br.com.saper.qenem.repositories.RoleRepository;
import br.com.saper.qenem.repositories.UsuarioRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class ProfessorService {

    @Autowired
    private ProfessorRepository professorRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private RoleRepository roleRepository;

    public ResponseEntity<Object> findAll() {
        return ResponseEntity.status(HttpStatus.OK)
                .body(professorRepository.findAll().stream().map(
                        (professor -> new ProfessorResponseDTO(professor))
                ).toList());
    }

    public ResponseEntity findById(Long id) {
       Professor professor = professorRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Professor não encontrado"));

        return ResponseEntity.status(HttpStatus.OK).body(new ProfessorResponseDTO(professor));
    }

    @Transactional
    public ResponseEntity<Object> save(ProfessorRequestDTO professorRequestDTO) {

        UsuarioRequestDTO usuarioRequestDTO = new UsuarioRequestDTO();
        BeanUtils.copyProperties(professorRequestDTO, usuarioRequestDTO);
        Usuario usuario = usuarioRequestDTO.toUsuario();

        if (usuarioRepository.existsByLogin(usuario.getLogin())) {
            throw new ConflictStoreException("Login já está em uso");
        }

        if (usuarioRepository.existsByEmail(usuario.getEmail())) {
            throw new ConflictStoreException("E-mail já está em uso");
        }

        if (!professorRequestDTO.getSenha().equals(professorRequestDTO.getConfirmacaoSenha())) {
            throw new ConflictStoreException("As senhas não estão iguais");
        }

        Optional<Role> optionalRole = roleRepository.findByRole(RoleNames.ROLE_PROFESSOR);
        usuario.getRoles().add(optionalRole.get());

        usuarioRepository.save(usuario);

        Professor professor = new Professor();
        professor.setCertificador(professorRequestDTO.isCertificador());
        professor.setUsuario(usuario);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(new ProfessorResponseDTO(professorRepository.save(professor)));
    }
}
