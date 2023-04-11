package br.com.saper.qenem.controllers;

import br.com.saper.qenem.dtos.AlunoRequestDTO;
import br.com.saper.qenem.dtos.QuestaoRequestDTO;
import br.com.saper.qenem.services.QuestaoService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/questoes")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class QuestaoController {

    @Autowired
    private QuestaoService questaoService;

    @GetMapping
    public ResponseEntity findAll(
            @RequestParam(name="materia", defaultValue = "") String materia,
            @RequestParam(name="certificada", defaultValue = "") Boolean certificada
    ) {
        return questaoService.findAll(materia, certificada);
    }

    @GetMapping("/mais-acessadas")
    public ResponseEntity findAllOrderByMaisAcessadas(
            @RequestParam(name="materia", defaultValue = "") String materia
    ) {
        return questaoService.findAllOrderByMaisAcessadas(materia);
    }

    @PostMapping
    public ResponseEntity<Object> save(@RequestBody @Valid QuestaoRequestDTO questaoRequestDTO) {
        return questaoService.save(questaoRequestDTO);
    }

    @PutMapping("/certificar/{id}")
    public ResponseEntity<Object> certificar(
            @PathVariable(name = "id") Long id,
            @RequestParam(name="certificada") Boolean certificada) {
        return questaoService.certificar(id, certificada);
    }

    @PutMapping("/incrementar/{id}")
    public ResponseEntity<Object> incrementaNumeroAcessos(@PathVariable(name = "id") Long id) {
        return questaoService.incrementaNumeroAcessos(id);
    }

}
