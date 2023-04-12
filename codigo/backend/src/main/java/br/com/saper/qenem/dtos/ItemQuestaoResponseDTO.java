package br.com.saper.qenem.dtos;

import br.com.saper.qenem.models.ItemQuestao;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ItemQuestaoResponseDTO {

    private Long id;

    private String texto;

    private boolean correto;

    public ItemQuestaoResponseDTO(ItemQuestao itemQuestao) {
        this.id = itemQuestao.getId();
        this.texto = itemQuestao.getTexto();
        this.correto = itemQuestao.isCorreto();
    }
}
