package br.com.saper.qenem.models;

import br.com.saper.qenem.enums.MateriaEnum;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Entity
@AllArgsConstructor
@Getter
@Setter
public class Questao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="questao_id")
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(name = "materia", nullable = false)
    private MateriaEnum materia;

    @Column(name = "enunciado", length = 10485760, nullable = false)
    private String enunciado;

    @ManyToOne(targetEntity = Professor.class)
    @JoinColumn(name = "professor_id", nullable = false)
    private Professor professor;

    @Column(name = "certificada")
    private Boolean certificada;

    @OneToMany(targetEntity = ItemQuestao.class, cascade = CascadeType.ALL, mappedBy = "questao")
    private Set<ItemQuestao> itensQuestao;

    @Column(name = "numero_acessos", nullable = false)
    private Long numeroAcessos;

    public Questao() {
        this.itensQuestao = new HashSet<ItemQuestao>();
    }
}
