package br.com.saper.qenem.dtos;

import br.com.saper.qenem.models.Aluno;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class AlunoResponseDTO {

    private Long id;

    private UsuarioResponseDTO usuario;

    public AlunoResponseDTO(Aluno aluno) {
        this.id = aluno.getId();
        this.usuario = new UsuarioResponseDTO(aluno.getUsuario());
    }

}
