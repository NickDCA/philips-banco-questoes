import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsArrowLeft as Voltar } from 'react-icons/bs'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import { useAPI } from '../../../services/API'
import AuthContext from 'store/authContext'
import QuestoesContext, { Questoes } from 'store/questoesContext'
export default function Explorar() {
  const api = useAPI()
  const auth = useContext(AuthContext)
  const questoes = useContext(QuestoesContext)
  const htmlConfig = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: auth.basicAuth,
    },
  }

  //   useEffect(() => {
  //     const materia = ''
  //     api
  //       .get(`questoes?materia=${materia}&certificada=true`, { certificada: true }, htmlConfig)
  //       .then((resposta) => questoes.addQuestao ? questoes.addQuestao(resposta) : null)
  //   }, [])
  return (
    <Container className='d-flex flex-column justify-content-center w-100 mt-4'>
      <Form.Select aria-label='Default select example' size='lg' className='border-primary'>
        <option>Filtre por área do conhecimento</option>
        <option value='default'>Todas</option>
        <option value='LINGUAGENS_CODIGOS'>Linguagens e Códigos</option>
        <option value='CIENCIAS_HUMANAS'>Ciências Humanas</option>
        <option value='CIENCIAS_NATUREZA'>Ciências da Natureza</option>
        <option value='MATEMATICA'>Matemática</option>
      </Form.Select>

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
