package br.com.saper.qenem.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity(name = "item_questao")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ItemQuestao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="item_questao_id")
    private Long id;

    @Column(name = "texto", length = 10485760)
    private String texto;

    @Column(name = "correto")
    private boolean correto;

    @ManyToOne(targetEntity = Questao.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "questao_id")
    private Questao questao;
}
