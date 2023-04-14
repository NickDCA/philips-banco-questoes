import { useContext, useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import { useAPI } from '../../../services/API'
import QuestoesContext from 'store/questoesContext'
import QuestaoLink from 'components/questaoLink'

export default function MaisAcessados() {
  const api = useAPI()

  const questoesMAcessadas = useContext(QuestoesContext)

  useEffect(() => {
    api
      .get(`questoes/mais-acessadas?materia=`, {})
      .then((resposta) =>
        questoesMAcessadas.addQuestao ? questoesMAcessadas.addQuestao(resposta) : null,
      )
    console.log(questoesMAcessadas.questoes ? questoesMAcessadas.questoes : null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [filtro, setFiltro] = useState<string | undefined>('')

  const questoesFiltradas =
    filtro !== ''
      ? questoesMAcessadas.questoes?.filter((questao) => questao.materia === filtro)
      : []

  //   const handleChange = (selectedOption: any) => {
  //     console.log('Option selected: ', selectedOption.value)
  //     setFiltro(selectedOption.value)
  //     console.log('Filtro: ', filtro)
  //   }

  return (
    <Container className='d-flex flex-column justify-content-center w-100 mt-4'>
      <h1 className='text-center mb-3'>MAIS ACESSADOS 🔥</h1>
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
        : questoesMAcessadas.questoes
        ? questoesMAcessadas.questoes.map((questao) => {
            return <QuestaoLink>{questao}</QuestaoLink>
          })
        : null}
    </Container>
  )
}
