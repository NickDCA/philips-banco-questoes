package br.com.saper.qenem.models;

import br.com.saper.qenem.enums.MateriaEnum;
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

    @Column(name = "titulo", nullable = false)
    private String titulo;

    @Column(name = "descricao", length = 10485760)
    private String descricao;

    @Column(name = "nome_arquivo", nullable = false, unique = true)
    private String nomeArquivo;

    @Enumerated(EnumType.STRING)
    @Column(name = "materia", nullable = false)
    private MateriaEnum materia;

    @ManyToOne(targetEntity = Professor.class)
    @JoinColumn(name = "professor_id", nullable = false)
    private Professor professor;

    @Column(name = "numero_acessos", nullable = false)
    private Long numeroAcessos;

}
