package br.com.saper.qenem.dtos;

import br.com.saper.qenem.models.Aluno;
import br.com.saper.qenem.models.Professor;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ProfessorResponseDTO {

    private Long id;

    private boolean certificador;

    private UsuarioResponseDTO usuario;

    public ProfessorResponseDTO(Professor professor) {
        this.id = professor.getId();
        this.certificador = professor.isCertificador();
        this.usuario = new UsuarioResponseDTO(professor.getUsuario());
    }

}
