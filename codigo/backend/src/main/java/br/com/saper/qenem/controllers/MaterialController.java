package br.com.saper.qenem.controllers;

import br.com.saper.qenem.dtos.MaterialRequestDTO;
import br.com.saper.qenem.dtos.QuestaoRequestDTO;
import br.com.saper.qenem.services.MaterialService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/materiais")
public class MaterialController {

    @Autowired
    private MaterialService materialService;

    @GetMapping
    public ResponseEntity findAll(
            @RequestParam(name="materia", defaultValue = "") String materia
    ) {
        return materialService.findAll(materia);
    }

    @GetMapping("/mais-acessados")
    public ResponseEntity findAllOrderByMaisAcessados(
            @RequestParam(name="materia", defaultValue = "") String materia
    ) {
        return materialService.findAllOrderByMaisAcessados(materia);
    }

    @PostMapping
    public ResponseEntity<Object> save(@RequestBody @Valid MaterialRequestDTO materialRequestDTO) {
        return materialService.save(materialRequestDTO);
    }

    @PutMapping("/incrementar/{id}")
    public ResponseEntity<Object> incrementaNumeroAcessos(@PathVariable(name = "id") Long id) {
        return materialService.incrementaNumeroAcessos(id);
    }
}
