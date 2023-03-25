package br.com.saper.qenem.dtos;

import br.com.saper.qenem.enums.MateriaEnum;
import br.com.saper.qenem.models.Prova;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.Set;
import java.util.stream.Collectors;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ProvaResponseDTO {

    private Long id;

    private AlunoResponseDTO aluno;

    private MateriaEnum materia;

    private Double nota;

    private boolean resolvida;

    private Set<QuestaoResponseDTO> questoes;

    public ProvaResponseDTO(Prova prova) {
        this.id = prova.getId();
        this.aluno = new AlunoResponseDTO(prova.getAluno());
        this.materia = prova.getMateria();
        this.nota = prova.getNota();
        this.resolvida = prova.isResolvida();
        this.questoes = prova.getQuestoes().stream().map(QuestaoResponseDTO::new).collect(Collectors.toSet());
    }
}
