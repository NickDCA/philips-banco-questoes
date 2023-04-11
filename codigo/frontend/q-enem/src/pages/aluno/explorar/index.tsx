import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsArrowLeft as Voltar } from 'react-icons/bs'
import Container from 'react-bootstrap/Container'

export default function AlunoExplorar() {
  const navigate = useNavigate()
  const [filtro, setFiltro] = useState('Padrão')
  const [filtroDisciplina, setFiltroDisciplina] = useState('Tudo')

  return (
    <Container>
      <main className='d-flex flex-column justify-content-center'>
        <div className='btn-group mb-3 w-75' role='group' aria-label='filtro-disciplinas'>
          <input
            type='radio'
            className='btn-check'
            name='filtro-disciplinas'
            id='btnTudo'
            autoComplete='off'
            checked
          />
          <label className='btn btn-outline-primary' htmlFor='btnTudo'>
            TUDO
          </label>

          <input
            type='radio'
            className='btn-check'
            name='filtro-disciplinas'
            id='btnLinguagens'
            autoComplete='off'
          />
          <label className='btn btn-outline-primary' htmlFor='btnLinguagens'>
            LINGUAGENS
          </label>

          <input
            type='radio'
            className='btn-check'
            name='filtro-disciplinas'
            id='btnHumanas'
            autoComplete='off'
          />
          <label className='btn btn-outline-primary' htmlFor='btnHumanas'>
            HUMANAS
          </label>

          <input
            type='radio'
            className='btn-check'
            name='filtro-disciplinas'
            id='btnNatureza'
            autoComplete='off'
          />
          <label className='btn btn-outline-primary' htmlFor='btnNatureza'>
            NATUREZA
          </label>

          <input
            type='radio'
            className='btn-check'
            name='filtro-disciplinas'
            id='btnMatematica'
            autoComplete='off'
          />
          <label className='btn btn-outline-primary' htmlFor='btnMatematica'>
            MATEMÁTICA
          </label>
        </div>

        <div className='border border-primary w-75 bg-light text-uppercase'>
          <div className='fs-6 border-bottom border-primary text-truncate p-2'>
            <a href='' className='text-decoration-none link-dark'>
              [linguagens 3045] - Seu Osvaldo foi passear na rua com seu cachorro e sua esposa,
              parou pra comer um cachorro quente e um churros de doce de leite
            </a>
          </div>

          <div className='fs-6 border-bottom border-primary text-truncate p-2'>
            <a href='' className='text-decoration-none link-dark'>
              [linguagens 3045] - Seu Osvaldo foi passear na rua com seu cachorro e sua esposa,
              parou pra comer um cachorro quente e um churros de doce de leite
            </a>
          </div>
        </div>
      </main>
    </Container>
  )
}
