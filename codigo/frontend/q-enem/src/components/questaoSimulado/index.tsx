import React, { useState } from 'react'
import { Form, ListGroup, ListGroupItem } from 'react-bootstrap'
import { ItemQuestao, Questao } from 'store/questoesContext'
type QuestaoSimuladoProps = {
  questao: Questao
  updateScores(questao: Questao, item: ItemQuestao): void
}

export default function QuestaoSimulado({ questao, updateScores }: QuestaoSimuladoProps) {
  const [status, setStatus] = useState<boolean>(false)
  // const styles = resolvida ? ''
  function handleChange(item: ItemQuestao) {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    !status ? setStatus(!status) : null

    updateScores(questao, item)
  }
  return (
    <ListGroup className='mb-3 border border-primary-subtle'>
      <ListGroupItem className='justify-content-between d-flex align-items-center'>
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
                />
              )
            })}
          </div>
        </Form>
      </ListGroupItem>
    </ListGroup>
  )
}
