package br.com.saper.qenem.repositories;

import br.com.saper.qenem.enums.MateriaEnum;
import br.com.saper.qenem.models.Questao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestaoRepository extends JpaRepository<Questao, Long> {

    public List<Questao> findAllByMateria(MateriaEnum materia);

    public List<Questao> findAllByCertificada(boolean certificada);

    public List<Questao> findAllByMateriaAndCertificada(MateriaEnum materia, boolean certificada);
}
