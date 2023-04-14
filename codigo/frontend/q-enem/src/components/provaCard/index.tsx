import React from 'react'
import { Link } from 'react-router-dom'

export default function ProvaCard({ children }: { children: any }) {
  return (
    <div className='list-group-item justify-content-start d-flex align-items-center'>
      {!children.resolvida ? (
        <Link to={`prova/${children.id}`} className='text-decoration-none link me-2 '>
          [{children.materia} #{children.id}]
        </Link>
      ) : (
        <span className='text-decoration-none text-muted me-2'>
          [{children.materia} #{children.id}]
        </span>
      )}

      {!children.resolvida ? (
        <span className='badge rounded-pill text-bg-warning'>NÃO RESOLVIDA</span>
      ) : (
        <span className='badge rounded-pill text-bg-success'>RESOLVIDA</span>
      )}

      {children.resolvida ? (
        <span className='badge rounded-pill text-primary ms-auto fs-6'>{children.nota}/10</span>
      ) : null}
    </div>
  )
}
