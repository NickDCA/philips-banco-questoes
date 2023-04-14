import { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAPI } from 'services/API'
import AuthContext from 'store/authContext'
import { Questao } from 'store/questoesContext'
import Form from 'react-bootstrap/Form'
import { BsCheck, BsFillCheckCircleFill, BsXCircleFill } from 'react-icons/bs'
// export type Questao = {
//     id: number
//     materia: string
//     enunciado: string
//     professorId: number
//     certificada: boolean
//     numeroAcessos: number
//     itensQuestoes: ItemQuestao[]
//   }

export default function QuestaoPagina() {
  const api = useAPI()
  const auth = useContext(AuthContext)
  const parametros = useParams()
  const htmlConfig = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: auth.user?.basicAuth,
    },
  }

  const [questao, setQuestao] = useState<Questao>()
  const [score, setScore] = useState<boolean>(false)
  const [showResult, setShowResult] = useState<boolean>(false)
  //   const itensQuestao = questao?.itensQuestoes
  //   const questaoId = String(questao?.id)
  //   const itensId = questao?.itensQuestoes.map((item) => String(item.id))

  useEffect(() => {
    api.get(`questoes/${parametros.id}`, {}, htmlConfig).then((resposta) => setQuestao(resposta))
    console.log(questao)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setShowResult(true)
  }
  return (
    <div className='card mt-3'>
      <div className='card-header'>
        {' '}
        <h2>
          [{questao?.materia} #{questao?.id}]
        </h2>{' '}
        <p className='lead'>{questao?.enunciado}</p>{' '}
      </div>
      <div className='card-body'>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <div key={questao?.id}>
            {questao?.itensQuestao?.map((item) => {
              return (
                <Form.Check
                  disabled={showResult}
                  type='radio'
                  id={String(item.id)}
                  name={`questao ${questao?.id}`}
                  label={item.texto}
                  onChange={() => (item.correto ? setScore(true) : setScore(false))}
                />
              )
            })}
          </div>

          <button className='btn btn-outline-success mt-3' type='submit'>
            Responder <BsCheck />
          </button>
        </Form>
      </div>
      {showResult ? (
        score ? (
          <div className='card-footer bg-success-subtle text-success'>
            <p>
              Parabéns, você acertou! <BsFillCheckCircleFill />
            </p>
            <button className='btn btn-outline-secondary' onClick={() => setShowResult(false)}>
              Tentar novamente
            </button>
          </div>
        ) : (
          <div className='card-footer bg-danger-subtle text-danger'>
            <p>
              Você errou, tente novamente... <BsXCircleFill />
            </p>
            <button className='btn btn-outline-secondary' onClick={() => setShowResult(false)}>
              Tentar novamente
            </button>
          </div>
        )
      ) : null}
    </div>
  )
}
