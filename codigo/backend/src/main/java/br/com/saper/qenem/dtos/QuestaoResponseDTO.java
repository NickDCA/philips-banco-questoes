package br.com.saper.qenem.dtos;

import br.com.saper.qenem.enums.MateriaEnum;
import br.com.saper.qenem.models.Aluno;
import br.com.saper.qenem.models.Questao;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;
import java.util.stream.Collectors;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class QuestaoResponseDTO {

    private Long id;

    private MateriaEnum materia;

    private String enunciado;

    private ProfessorResponseDTO professor;

    private Boolean certificada;

    private Long numeroAcessos;

    private Set<ItemQuestaoResponseDTO> itensQuestao;

    public QuestaoResponseDTO(Questao questao) {
        this.id = questao.getId();
        this.materia = questao.getMateria();
        this.enunciado = questao.getEnunciado();
        this.professor = new ProfessorResponseDTO(questao.getProfessor());
        this.certificada = questao.getCertificada();
        this.itensQuestao = questao.getItensQuestao().stream().map(ItemQuestaoResponseDTO::new).collect(Collectors.toSet());
        this.numeroAcessos = questao.getNumeroAcessos();
    }

}
