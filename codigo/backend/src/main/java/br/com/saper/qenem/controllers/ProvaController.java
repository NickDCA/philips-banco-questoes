package br.com.saper.qenem.controllers;

import br.com.saper.qenem.services.ProvaService;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/provas")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProvaController {

    @Autowired
    private ProvaService provaService;

    @GetMapping
    public ResponseEntity<Object> findAll(
            @RequestParam(name="materia", defaultValue = "") String materia
    ) {
        return provaService.findAll(materia);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findById(@PathVariable(name = "id") Long id) {
        return provaService.findById(id);
    }

    @PostMapping("/gerar-prova")
    public ResponseEntity<Object> gerarProva (
                @RequestParam(name="materia") String materia,
                @RequestParam(name="numeroQuestoes", defaultValue = "10") Integer numeroQuestoes
            ) {
        return provaService.gerarProva(materia, numeroQuestoes);
    }

    @PutMapping("/salvar-nota/{id}")
    public ResponseEntity<Object> salvarNota(
            @PathVariable(name = "id") Long id,
            @RequestParam(name="nota") Double nota) {
        return provaService.salvarNota(id, nota);
    }

}
