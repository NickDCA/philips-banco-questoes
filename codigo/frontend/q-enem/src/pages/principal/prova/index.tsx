import QuestaoSimulado from 'components/questaoSimulado'
import React, { useContext, useEffect, useState } from 'react'
import { Container, Form, ListGroup, ListGroupItem } from 'react-bootstrap'
import { BsCheck, BsSend, BsX } from 'react-icons/bs'
import { useParams } from 'react-router-dom'
import { useAPI } from 'services/API'
import AuthContext from 'store/authContext'
import { Prova } from 'store/provaContext'
import { ItemQuestao, Questao } from 'store/questoesContext'

export default function ProvaSimulado() {
  const api = useAPI()
  const auth = useContext(AuthContext)

  const parametros = useParams()

  const [prova, setProva] = useState<Prova>()
  const [scores, setScores] = useState<Questao[]>([])
  const [showResult, setShowResult] = useState<boolean>(false)

  function updateScores(questao: Questao, item: ItemQuestao) {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    item.correto
      ? (setScores([...scores, questao]),
        console.log(`Questao ${questao?.materia}${questao.id} CORRETA!`))
      : (setScores(scores.filter((score) => score.id !== questao.id)),
        console.log(`Questão ${questao?.materia}${questao.id} ERRADA!`))
  }

  useEffect(() => {
    api.get(`provas/${parametros.id}`, {}).then((response) => {
      setProva(response)
      console.log(response)
    })
  }, [])

  function handleSubmit(e: any) {
    e.preventDefault()
    setShowResult(true)
    let nota = 0
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    prova?.questoes.length ? (nota = (scores.length / prova?.questoes?.length) * 10) : null
    api.put(`provas/salvar-nota/${String(prova?.id)}?nota=${String(nota)}`, {}).then((response) => {
      console.log(response)
      console.log(nota)
    })
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <div className='my-3'>
          {prova?.questoes.map((questao: Questao) => (
            <QuestaoSimulado questao={questao} updateScores={updateScores} />
          ))}
        </div>

        <button className='btn btn-outline-primary btn-lg mb-4' type='submit'>
          Enviar <BsSend />
        </button>
      </Form>

      {showResult ? (
        <div className='border-start border-end text-start fs-6 p-3'>
          <h3>
            Você acertou {scores.length}/{prova?.questoes.length}!
          </h3>
          <h4>GABARITO</h4>
          <ListGroup>
            {prova?.questoes.map((questao) =>
              scores.includes(questao) ? (
                <p className='text-success'>
                  {`${questao?.materia} #${questao.id}  `} <BsCheck />
                </p>
              ) : (
                <p className='text-danger'>
                  {`${questao?.materia} #${questao.id}  `} <BsX />
                </p>
              ),
            )}
          </ListGroup>
        </div>
      ) : null}
    </Container>
  )
}
