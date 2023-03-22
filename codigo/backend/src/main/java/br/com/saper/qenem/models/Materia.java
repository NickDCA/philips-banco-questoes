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
public class Materia {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Enumerated(EnumType.STRING)
    @Column(name = "nome")
    MateriaEnum materiaEnum;

    @OneToMany(targetEntity = Questao.class, mappedBy = "materia")
    private Set<Questao> questoes;

    @OneToMany(targetEntity = Material.class, mappedBy = "materia")
    private Set<Material> materiais;
}
