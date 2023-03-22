package br.com.saper.qenem.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Material {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="item_questao_id")
    private Long id;

    @Column(name = "titulo")
    private String titulo;

    @Column(name = "descricao")
    private String descricao;

    @Column(name = "nome_arquivo")
    private String nomeArquivo;

    @ManyToOne(targetEntity = Materia.class)
    @JoinColumn(name = "materia_id")
    private Materia materia;

    @ManyToOne(targetEntity = Professor.class)
    @JoinColumn(name = "professor_id")
    private Professor professor;

    @Column(name = "numero_acessos")
    private Long numeroAcessos;

}
