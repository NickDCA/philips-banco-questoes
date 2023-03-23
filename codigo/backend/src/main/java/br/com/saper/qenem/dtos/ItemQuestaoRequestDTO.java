package br.com.saper.qenem.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ItemQuestaoRequestDTO {

    private String texto;

    private boolean correto;

//    private Long questaoId;
}
