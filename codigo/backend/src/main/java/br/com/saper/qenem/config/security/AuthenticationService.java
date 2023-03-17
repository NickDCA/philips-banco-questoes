package br.com.saper.qenem.config.security;

import br.com.saper.qenem.models.Usuario;
import br.com.saper.qenem.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthenticationService implements UserDetailsService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<Usuario> optionalUsuario = usuarioRepository.findByLogin(username);

        if (optionalUsuario.isEmpty()) {
            throw new UsernameNotFoundException("Usuário não encontrado");
        }

        return optionalUsuario.get();
    }

}
