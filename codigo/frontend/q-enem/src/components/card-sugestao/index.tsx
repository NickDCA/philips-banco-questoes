import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight as Seguir } from 'react-icons/bs'
type CardSugestaoType = {
  titulo: string
  conteudo: string
  link: string
}
export default function CardSugestao({ titulo, conteudo, link }: CardSugestaoType) {
  return (
    <div className='col-md-4 m-3'>
      <div className='card'>
        <div className='card-header fs-4 bg-primary text-white'>{titulo}</div>
        <div className='card-body lead'>{conteudo}</div>
        <div className='card-footer fs-5'>
          <Link to={link} className='text-decoration-none'>
            {titulo} <Seguir />
          </Link>
        </div>
      </div>
    </div>
  )
}
