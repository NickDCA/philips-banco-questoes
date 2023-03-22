package br.com.saper.qenem.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Questao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="questao_id")
    private Long id;

    @ManyToOne(targetEntity = Materia.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "materia_id")
    private Materia materia;

    @Column(name = "enunciado")
    private String enunciado;

    @ManyToOne(targetEntity = Professor.class)
    @JoinColumn(name = "professor_id")
    private Professor professor;

    @Column(name = "certificada")
    private boolean certificada;

    @OneToMany(targetEntity = ItemQuestao.class, cascade = CascadeType.ALL, mappedBy = "questao")
    private Set<ItemQuestao> itensQuestao;

    @Column(name = "numero_acessos")
    private Long numeroAcessos;
}
