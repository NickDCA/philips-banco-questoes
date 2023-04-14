import React, { useState } from 'react'
import { Form, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Prova } from 'store/provaContext'
import { ItemQuestao, Questao } from 'store/questoesContext'
type QuestaoSimuladoProps = {
  questao: Questao
  updateScores(questao: Questao, item: ItemQuestao): void
  resolvida: boolean
  scores: Questao[]
}

export default function QuestaoSimulado({
  questao,
  updateScores,
  resolvida,
  scores,
}: QuestaoSimuladoProps) {
  const [status, setStatus] = useState<boolean>(false)
  const resolvidaStyles = resolvida
    ? scores.includes(questao)
      ? 'bg-success bg-opacity-10'
      : 'bg-danger bg-opacity-10'
    : ''
  function handleChange(item: ItemQuestao) {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    !status ? setStatus(!status) : null

    updateScores(questao, item)
  }
  return (
    <ListGroup className='mb-3 border border-primary-subtle'>
      <ListGroupItem
        className={`justify-content-between d-flex align-items-center ${resolvidaStyles}`}
      >
        <span className='fs-6 fw-bold'>{`${questao.materia}  #${questao.id}`}</span>
        {!status ? (
          <span className='fs-6 border bg-warning bg-opacity-10 border-warning text-warning rounded p-1'>
            RESOLVER
          </span>
        ) : (
          <span className='fs-6 border bg-info bg-opacity-10 border-info text-info rounded p-1'>
            RESOLVIDA
          </span>
        )}
      </ListGroupItem>
      <ListGroupItem className='text-justify'>
        <p className='fs-5'>{questao.enunciado}</p>
      </ListGroupItem>
      <ListGroupItem>
        <Form>
          <div key={questao?.id}>
            {questao?.itensQuestao?.map((item) => {
              return (
                <Form.Check
                  //   disabled={showResult}
                  type='radio'
                  id={String(item.id)}
                  name={`questao ${questao?.id}`}
                  label={item.texto}
                  onChange={(e) => handleChange(item)}
                  disabled={resolvida}
                />
              )
            })}
          </div>
        </Form>
      </ListGroupItem>
    </ListGroup>
  )
}
