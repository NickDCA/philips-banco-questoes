package br.com.saper.qenem.repositories;

import br.com.saper.qenem.enums.RoleNames;
import br.com.saper.qenem.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {

    Optional<Role> findByRole(RoleNames rolename);
}
