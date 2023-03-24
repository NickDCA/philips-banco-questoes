package br.com.saper.qenem.repositories;

import br.com.saper.qenem.enums.MateriaEnum;
import br.com.saper.qenem.models.Material;
import br.com.saper.qenem.models.Questao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;

@Repository
public interface MaterialRepository extends JpaRepository<Material, Long> {

    List<Material> findAllByMateria(MateriaEnum materia);

    @Query(value = "SELECT m.* FROM Material m WHERE m.materia like '%' || ?1 || '%' order by numero_acessos desc", nativeQuery = true)
    List<Material> findAllOrderByMaisAcessados(String materia);

    boolean existsByNomeArquivo(String nomeArquivo);
}
