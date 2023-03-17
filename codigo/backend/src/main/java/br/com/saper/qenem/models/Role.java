package br.com.saper.qenem.models;

import br.com.saper.qenem.enums.RoleNames;
import jakarta.persistence.*;
import org.springframework.security.core.GrantedAuthority;

@Entity
public class Role implements GrantedAuthority {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Enumerated(EnumType.STRING)
    @Column(name = "role")
    RoleNames role;

    @Override
    public String getAuthority() {
        return role.toString();
    }

}
