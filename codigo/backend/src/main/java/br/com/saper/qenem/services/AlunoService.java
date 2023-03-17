package br.com.saper.qenem.services;

import br.com.saper.qenem.dtos.AlunoRequestDTO;
import br.com.saper.qenem.dtos.AlunoResponseDTO;
import br.com.saper.qenem.dtos.UsuarioRequestDTO;
import br.com.saper.qenem.enums.RoleNames;
import br.com.saper.qenem.exceptions.ConflictStoreException;
import br.com.saper.qenem.models.Aluno;
import br.com.saper.qenem.models.Role;
import br.com.saper.qenem.models.Usuario;
import br.com.saper.qenem.repositories.AlunoRepository;
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
public class AlunoService {

    @Autowired
    private AlunoRepository alunoRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private RoleRepository roleRepository;

    public ResponseEntity<Object> findAll() {
        return ResponseEntity.status(HttpStatus.OK)
                .body(alunoRepository.findAll().stream().map(
                        (aluno -> new AlunoResponseDTO(aluno))
                ).toList());
    }

    public ResponseEntity findById(Long id) {
        Aluno aluno = alunoRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Aluno não encontrado"));

        return ResponseEntity.status(HttpStatus.OK).body(new AlunoResponseDTO(aluno));
    }

    @Transactional
    public ResponseEntity<Object> save(AlunoRequestDTO alunoRequestDTO) {

        UsuarioRequestDTO usuarioRequestDTO = new UsuarioRequestDTO();
        BeanUtils.copyProperties(alunoRequestDTO, usuarioRequestDTO);
        Usuario usuario = usuarioRequestDTO.toUsuario();

        if (usuarioRepository.existsByLogin(usuario.getLogin())) {
            throw new ConflictStoreException("Login já está em uso");
        }

        if (usuarioRepository.existsByEmail(usuario.getEmail())) {
            throw new ConflictStoreException("E-mail já está em uso");
        }

        if (!alunoRequestDTO.getSenha().equals(alunoRequestDTO.getConfirmacaoSenha())) {
            throw new ConflictStoreException("As senhas não estão iguais");
        }

        Optional<Role> optionalRole = roleRepository.findByRole(RoleNames.ROLE_ALUNO);
        usuario.getRoles().add(optionalRole.get());

        usuarioRepository.save(usuario);

        Aluno aluno = new Aluno();
        aluno.setUsuario(usuario);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(new AlunoResponseDTO(alunoRepository.save(aluno)));
    }

}
