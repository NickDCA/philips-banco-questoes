package br.com.saper.qenem.models;

import br.com.saper.qenem.enums.MateriaEnum;
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
public class Prova {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="prova_id")
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(name = "materia")
    private MateriaEnum materia;
    
    @ManyToMany(targetEntity = Questao.class)
    @JoinTable(name = "prova_questoes",
            joinColumns = @JoinColumn(name = "prova_id"),
            inverseJoinColumns = @JoinColumn(name = "questao_id"))
    private Set<Questao> questoes;

    @ManyToOne(targetEntity = Aluno.class)
    @JoinColumn(name = "aluno_id")
    private Aluno aluno;

    @Column(name="nota")
    private Double nota;
}