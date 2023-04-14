import { useContext, useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import { useAPI } from '../../../services/API'
import QuestoesContext from 'store/questoesContext'
import QuestaoLink from 'components/questaoLink'
import { BsSearch } from 'react-icons/bs'

export default function Explorar() {
  const api = useAPI()

  const questoesExplorar = useContext(QuestoesContext)

  useEffect(() => {
    api
      .get(`questoes?materia=&certificada=true`, { certificada: true })
      .then((resposta) =>
        questoesExplorar.addQuestao ? questoesExplorar.addQuestao(resposta) : null,
      )
    console.log(questoesExplorar.questoes ? questoesExplorar.questoes : null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [filtro, setFiltro] = useState<string | undefined>('')

  const questoesFiltradas =
    filtro !== '' ? questoesExplorar.questoes?.filter((questao) => questao.materia === filtro) : []

  //   const handleChange = (selectedOption: any) => {
  //     console.log('Option selected: ', selectedOption.value)
  //     setFiltro(selectedOption.value)
  //     console.log('Filtro: ', filtro)
  //   }

  return (
    <Container className='d-flex flex-column justify-content-center w-100 mt-4'>
      <h1 className='text-center mb-3'>
        EXPLORAR <BsSearch />
      </h1>
      <select
        className='form-select border border-primary mb-3'
        value={filtro}
        onChange={(e) => {
          setFiltro(e.target.value)
        }}
      >
        <option selected value=''>
          Tudo
        </option>
        <option value='LINGUAGENS_CODIGOS'>Linguagens e Códigos</option>
        <option value='CIENCIAS_HUMANAS'>Ciências Humanas</option>
        <option value='CIENCIAS_NATUREZA'>Ciências da Natureza</option>
        <option value='MATEMATICA'>Matemática</option>
      </select>

      {filtro !== ''
        ? questoesFiltradas
          ? questoesFiltradas.map((questao) => {
              return <QuestaoLink>{questao}</QuestaoLink>
            })
          : null
        : questoesExplorar.questoes
        ? questoesExplorar.questoes.map((questao) => {
            return <QuestaoLink>{questao}</QuestaoLink>
          })
        : null}
    </Container>
  )
}
