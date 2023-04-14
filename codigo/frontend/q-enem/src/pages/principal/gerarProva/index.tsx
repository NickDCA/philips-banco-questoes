import { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import { useAPI } from 'services/API'

export default function GerarProva() {
  const [materia, setMateria] = useState<string>()
  const [nrQuestoes, setNrQuestoes] = useState<string>('5')

  const api = useAPI()
  function gerarProva(e: any) {
    e.preventDefault()
    api
      .post(`provas/gerar-prova?materia=${materia}&numeroQuestoes=${nrQuestoes}`, {})
      .then((response) => {
        console.log(response)
      })
  }

  useEffect(() => {
    console.log(materia, nrQuestoes)
  }, [materia, nrQuestoes])
  return (
    <div className='d-flex flex-column p-3'>
      <div className='card'>
        <div className='card-header'>
          <p className='h2 fw-semibold text-primary'>GERAR PROVA</p>
          <p className='lead'>
            Para gerar seu simulado, basta escolher o assunto de interesse para as questões. Depois
            disso, siga para a <span className='text-primary'> área de provas </span>
            clicando no botão
            <span className='text-primary'> começar simulado</span> logo abaixo.
          </p>
        </div>
        <div className='card-body'>
          <p className='h3 fw-semibold mb-3'>Assuntos de Interesse</p>
          <Form className='fs-5 lh-base' onSubmit={(e) => gerarProva(e)}>
            <div key={1}>
              <Form.Check
                onChange={(e) => {
                  setMateria(e.target.id)
                }}
                type='radio'
                label='Linguagens, Códigos e suas Tecnologias'
                id='LINGUAGENS_CODIGOS'
                name='checkMaterias'
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
              />
              <Form.Check
                onChange={(e) => {
                  setMateria(e.target.id)
                }}
                type='radio'
                label='Ciências Humanas e suas Tecnologias'
                id='CIENCIAS_HUMANAS'
                name='checkMaterias'
              />
              <Form.Check
                onChange={(e) => {
                  setMateria(e.target.id)
                }}
                type='radio'
                label='Ciências da Natureza e suas Tecnologias'
                id='CIENCIAS_NATUREZA'
                name='checkMaterias'
              />
              <Form.Check
                onChange={(e) => {
                  setMateria(e.target.id)
                }}
                type='radio'
                label='Matemática e suas Tecnologias'
                id='MATEMATICA'
                name='checkMaterias'
              />
            </div>

            <p className='h3 fw-semibold mb-2 mt-3'>Nº de questões</p>
            <select
              className='form-select border-1 border-primary'
              onChange={(e) => setNrQuestoes(e.target.value)}
            >
              <option value='5'>5 - Aquecimento</option>
              <option value='10'>10 - Curta</option>
              <option value='15'>15 - Média</option>
              <option disabled value='45'>
                45 - Padrão ENEM
              </option>
            </select>
            <button className='btn btn-lg btn-primary mt-3' type='submit'>
              COMEÇAR SIMULADO
            </button>
          </Form>
        </div>
      </div>
    </div>
  )
}
