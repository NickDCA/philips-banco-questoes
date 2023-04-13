import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAPI } from 'services/API'
import AuthContext from 'store/authContext'
import QuestoesContext, { ItemQuestao, Questao } from 'store/questoesContext'
import Form from 'react-bootstrap/Form'
import { BsCheck } from 'react-icons/bs'
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
  const idQuestao = parametros
  const htmlConfig = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: auth.user?.basicAuth,
    },
  }

  const [questao, setQuestao] = useState<Questao>()
  const [score, setScore] = useState<boolean>(false)
  //   const itensQuestao = questao?.itensQuestoes
  //   const questaoId = String(questao?.id)
  //   const itensId = questao?.itensQuestoes.map((item) => String(item.id))

  useEffect(() => {
    api.get(`questoes/${parametros.id}`, {}, htmlConfig).then((resposta) => setQuestao(resposta))
    console.log(questao)
  }, [])

  const handleSubmit = (e: any) => {
    e.preventDefault()
    score ? console.log('Acertou!') : console.log('Errou!')
  }
  return (
    <div className='card mt-3'>
      <div className='card-header'>{questao?.enunciado}</div>
      <div className='card-body'>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <div key={questao?.id}>
            {questao?.itensQuestao?.map((item) => {
              return (
                <Form.Check
                  type='radio'
                  id={String(item.id)}
                  name={`questao ${questao?.id}`}
                  label={item.texto}
                  onChange={(e) => (item.correto ? setScore(true) : setScore(false))}
                />
              )
            })}
          </div>

          <button
            className='btn btn-outline-success mt-3'
            type='submit'
            data-bs-toggle='modal'
            data-bs-target='#exampleModal'
          >
            Responder <BsCheck />
          </button>
        </Form>
      </div>
    </div>
  )
}
