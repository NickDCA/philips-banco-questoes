package br.com.saper.qenem.dtos;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class QuestaoRequestDTO {

    private String materia;

    @NotBlank(message = "Enunciado é obrigatório")
    private String enunciado;

    private Long professorId;

    private Set<ItemQuestaoRequestDTO> itensQuestao;
    
}
