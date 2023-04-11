package br.com.saper.qenem.controllers;

import br.com.saper.qenem.dtos.AlunoRequestDTO;
import br.com.saper.qenem.services.AlunoService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/alunos")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AlunoController {

    @Autowired
    private AlunoService alunoService;

    @GetMapping
    @CrossOrigin
    public ResponseEntity findAll() {
        return alunoService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity findById(@PathVariable(name = "id") Long id) {

        return alunoService.findById(id);
    }

    @PostMapping
    public ResponseEntity<Object> save(@RequestBody @Valid AlunoRequestDTO alunoRequestDTO) {
        return alunoService.save(alunoRequestDTO);
    }
}
