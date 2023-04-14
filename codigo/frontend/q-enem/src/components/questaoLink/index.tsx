import React from 'react'
import { Link } from 'react-router-dom'
import { useAPI } from 'services/API'
import { Questao } from 'store/questoesContext'
// export type Questao = {
//     id: number
//     materia: string
//     enunciado: string
//     professorId: number
//     certificada: boolean
//     numeroAcessos: number
//     itensQuestoes: ItemQuestao[]
//   }

export default function QuestaoLink({ children }: { children: any }) {
  const api = useAPI()
  function addView() {
    api.put(`questoes/incrementar/${children.id}`, {})
    console.log('fez!')
  }

  return (
    <div
      className='fs-6 border-bottom border-secondary text-truncate text-uppercase p-2'
      onClick={addView}
    >
      <Link to={`questao/${children.id}`} className='text-decoration-none link-primary'>
        <span className='me-2'>
          [{children.materia} #{children.id}]
        </span>

        {children.enunciado}
      </Link>
    </div>
  )
}
