package br.com.saper.qenem.config.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfiguration {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.httpBasic();
        http.authorizeHttpRequests()
                .requestMatchers(HttpMethod.POST, "/alunos").permitAll()
                .requestMatchers(HttpMethod.POST, "/professores").permitAll()
                .requestMatchers("/perfil/**").authenticated()
                .requestMatchers(HttpMethod.GET, "/questoes").authenticated()
                .requestMatchers(HttpMethod.PUT, "/questoes/incrementar/**").authenticated()
                .requestMatchers(HttpMethod.POST, "/questoes").hasRole("PROFESSOR")
                .requestMatchers(HttpMethod.PUT, "/questoes/certificar/**").hasRole("PROFESSOR")
//                .requestMatchers(HttpMethod.DELETE, "/**").hasRole("ADMIN")
                .anyRequest().hasAnyRole("ADMIN");
        http.csrf().disable();

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
}
