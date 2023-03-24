package br.com.saper.qenem.dtos;

import br.com.saper.qenem.enums.MateriaEnum;
import br.com.saper.qenem.models.Material;
import br.com.saper.qenem.models.Questao;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;
import java.util.stream.Collectors;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class MaterialResponseDTO {

    private Long id;

    private String titulo;

    private String descricao;

    private String nomeArquivo;

    private MateriaEnum materia;

    private ProfessorResponseDTO professor;

    private Long numeroAcessos;

    public MaterialResponseDTO(Material material) {
        this.id = material.getId();
        this.titulo = material.getTitulo();
        this.descricao = material.getDescricao();
        this.nomeArquivo = material.getNomeArquivo();
        this.materia = material.getMateria();
        this.professor = new ProfessorResponseDTO(material.getProfessor());
        this.numeroAcessos = material.getNumeroAcessos();
    }

}
