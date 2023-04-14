import React from 'react'
import { Link } from 'react-router-dom'

export default function ProvaCard({ children }: { children: any }) {
  return (
    <div className='list-group-item list-group-item-action p-2 align-self-end'>
      {!children.resolvida ? (
        <span className='border border-warning bg-warning bg-opacity-10 rounded w-25 ms-3 p-1 flex-end'>
          RESOLVER
        </span>
      ) : (
        <span className='border border-success bg-success bg-opacity-10 rounded w-25 ms-3 p-1 flex-end'>
          RESOLVIDA
        </span>
      )}
      <Link to='/' className='text-decoration-none fs-5 link ms-3'>
        [{children.materia} #{children.id}]
      </Link>
    </div>
  )
}
