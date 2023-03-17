package br.com.saper.qenem.dtos;

import br.com.saper.qenem.models.Role;
import br.com.saper.qenem.models.Usuario;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.ArrayList;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UsuarioRequestDTO {

    private String nome;

    private String login;

    private String email;

    private String senha;

    private String confirmacaoSenha;

    public Usuario toUsuario() {
        senha = new BCryptPasswordEncoder().encode(senha);

        Usuario usuario = new Usuario();
        usuario.setNome(nome);
        usuario.setLogin(login);
        usuario.setEmail(email);
        usuario.setSenha(senha);
        usuario.setRoles(new ArrayList<Role>());

        return usuario;
    }
}
