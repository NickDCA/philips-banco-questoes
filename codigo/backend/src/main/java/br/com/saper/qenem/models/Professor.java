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
public class Professor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="professor_id")
    private Long id;

    @Column(name = "certificador")
    private boolean certificador;

    @OneToOne(targetEntity = Usuario.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;

    @OneToMany(targetEntity = Questao.class, cascade = CascadeType.ALL, mappedBy = "professor")
    private Set<Questao> questoes;

    @OneToMany(targetEntity = Material.class, cascade = CascadeType.ALL, mappedBy = "professor")
    private Set<Material> materiais;

}
