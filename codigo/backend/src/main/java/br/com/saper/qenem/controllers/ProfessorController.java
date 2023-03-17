package br.com.saper.qenem.controllers;

import br.com.saper.qenem.dtos.AlunoRequestDTO;
import br.com.saper.qenem.dtos.ProfessorRequestDTO;
import br.com.saper.qenem.services.AlunoService;
import br.com.saper.qenem.services.ProfessorService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/professores")
public class ProfessorController {

    @Autowired
    private ProfessorService professorService;

    @GetMapping
    public ResponseEntity findAll() {
        return professorService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity findById(@PathVariable(name = "id") Long id) {

        return professorService.findById(id);
    }

    @PostMapping
    public ResponseEntity<Object> save(@RequestBody @Valid ProfessorRequestDTO professorRequestDTO) {
        return professorService.save(professorRequestDTO);
    }
}
