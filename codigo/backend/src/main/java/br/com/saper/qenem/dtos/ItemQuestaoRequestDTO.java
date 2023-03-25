package br.com.saper.qenem.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ItemQuestaoRequestDTO {

    @NotBlank(message = "Enunciado é obrigatório")
    private String texto;

    @NotNull(message = "Resposta é obrigatória")
    private boolean correto;

}
