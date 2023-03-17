package br.com.saper.qenem.controllers;

import br.com.saper.qenem.models.Usuario;
import br.com.saper.qenem.services.AlunoService;
import br.com.saper.qenem.services.ProfessorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/perfil")
public class PerfilController {

    @Autowired
    private AlunoService alunoService;

    @Autowired
    private ProfessorService professorService;

    @GetMapping("/dados")
    public ResponseEntity findUsuario() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (principal instanceof Usuario usuario) {

            if (usuario.getAluno() != null) {
                return alunoService.findById(usuario.getAluno().getId());
            }

            if (usuario.getProfessor() != null) {
                return professorService.findById(usuario.getProfessor().getId());
            }
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }
}
