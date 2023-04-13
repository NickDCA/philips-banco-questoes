import { useContext, useEffect, useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsArrowLeft as Voltar } from 'react-icons/bs'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import { useAPI } from '../../../services/API'
import AuthContext from 'store/authContext'
import QuestoesContext, { Questoes, Questao } from 'store/questoesContext'
import Select from 'react-select'
import QuestaoLink from 'components/questaoLink'

export default function Explorar() {
  const api = useAPI()
  const auth = useContext(AuthContext)

  const htmlConfig = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: auth.user?.basicAuth,
    },
  }

  const questoesExplorar = useContext(QuestoesContext)

  useEffect(() => {
    api
      .get(`questoes?materia=&certificada=true`, { certificada: true }, htmlConfig)
      .then((resposta) =>
        questoesExplorar.addQuestao ? questoesExplorar.addQuestao(resposta) : null,
      )
    console.log(questoesExplorar.questoes ? questoesExplorar.questoes : null)
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
      {/* {questoesExplorar.questoes
        ? questoesExplorar.questoes.map((index) => {
            return <QuestaoLink>{index}</QuestaoLink>
          })
        : null} */}

      {/* <div className='border border-primary  bg-light text-uppercase'>
        <div className='fs-6 border-bottom border-primary text-truncate p-2'>
          <a href='' className='text-decoration-none link-dark'>
            [linguagens 3045] - Seu Osvaldo foi passear na rua com seu cachorro e sua esposa, parou
            pra comer um cachorro quente e um churros de doce de leite
          </a>
        </div>

        <div className='fs-6 border-bottom border-primary text-truncate p-2'>
          <a href='' className='text-decoration-none link-dark'>
            [linguagens 3045] - Seu Osvaldo foi passear na rua com seu cachorro e sua esposa, parou
            pra comer um cachorro quente e um churros de doce de leite
          </a>
        </div>
      </div> */}
    </Container>
  )
}
