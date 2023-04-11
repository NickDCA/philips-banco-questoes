package br.com.saper.qenem.dtos;

import br.com.saper.qenem.models.Role;
import br.com.saper.qenem.models.Usuario;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UsuarioResponseDTO {

    private Long id;

    private String nome;

    private String login;

    private String email;

    private List<Role> roles;

    public UsuarioResponseDTO(Usuario usuario) {
        this.id = usuario.getId();
        this.nome = usuario.getNome();
        this.login = usuario.getLogin();
        this.email = usuario.getEmail();
        this.roles = usuario.getRoles();
    }

}
