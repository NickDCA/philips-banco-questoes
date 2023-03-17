package br.com.saper.qenem.repositories;

import br.com.saper.qenem.models.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
     boolean existsByLogin(String login);

    boolean existsByEmail(String email);

    Optional<Usuario> findByLogin(String username);
}
