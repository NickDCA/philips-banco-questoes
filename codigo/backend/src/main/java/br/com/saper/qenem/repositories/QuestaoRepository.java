package br.com.saper.qenem.repositories;

import br.com.saper.qenem.enums.MateriaEnum;
import br.com.saper.qenem.models.Questao;
import jakarta.persistence.OrderBy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestaoRepository extends JpaRepository<Questao, Long> {

    @Query(value = "SELECT q.* FROM Questao q WHERE q.materia like '%' || ?1 || '%' AND coalesce(q.CERTIFICADA,-1) = ?2", nativeQuery = true)
    public List<Questao> findAll(String materia, Integer certificada);
}
