import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsArrowLeft as Voltar } from 'react-icons/bs'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import { useAPI } from '../../../services/API'
export default function AlunoExplorar() {
  const navigate = useNavigate()
  const [questoes, setQuestoes] = useState([])
  const [disciplina, setDisciplina] = useState()
  const api = useAPI()

  useEffect(() => {
    api.get('questoes', {}).then((resposta) => console.log(resposta))
  }, [])
  return (
    <Container className='d-flex flex-column justify-content-center w-100 mt-4'>
      <Form.Select aria-label='Default select example' size='lg' className='border-primary'>
        <option>Filtre por área do conhecimento</option>
        <option value='1'>Todas</option>
        <option value='2'>Linguagens e Códigos</option>
        <option value='3'>Ciências Humanas</option>
        <option value='4'>Ciências da Natureza</option>
        <option value='5'>Matemática</option>
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
