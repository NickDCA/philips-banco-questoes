import React from 'react'
import { Link } from 'react-router-dom'
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
  return (
    <div className='fs-6 border-bottom border-primary text-truncate text-uppercase p-2'>
      <Link to={`questao/${children.id}`} className='text-decoration-none link-dark'>
        <span className='me-2'>
          [{children.materia} #{children.id}]
        </span>

        {children.enunciado}
      </Link>
    </div>
  )
}
