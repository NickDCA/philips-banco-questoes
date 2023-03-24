package br.com.saper.qenem.repositories;

import br.com.saper.qenem.enums.MateriaEnum;
import br.com.saper.qenem.models.Material;
import br.com.saper.qenem.models.Prova;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProvaRepository extends JpaRepository<Prova, Long> {

    List<Prova> findAllByAlunoId(Long alunoId);

    List<Prova> findAllByAlunoIdAndMateria(Long alunoId, MateriaEnum materia);
}
