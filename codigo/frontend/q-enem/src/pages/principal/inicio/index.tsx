import CardSugestao from 'components/card-sugestao'
import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import AuthContext from 'store/authContext'
import gifBob from 'assets/bobamor.gif'
import { Link } from 'react-router-dom'
import { BsFileCheck, BsPlusCircle } from 'react-icons/bs'

export default function Inicio() {
  const auth = useContext(AuthContext)
  return (
    <Container className='d-flex flex-column justify-content-center align-items-center my-3'>
      <h2 className='text-primary font-monospace fw-light mb-4'>
        Bem-vindo de volta, {auth.user?.nome} 🚀
      </h2>
      <img src={gifBob} alt='gif bob esponja' className='rounded' />
      <ul className='list-group list-group-flush lead fs-4 mt-4'>
        <li className='list-group-item'>
          Explore e descubra questões e{' '}
          <span className='text-decoration-line-through'>materiais</span> no nosso amplo banco de
          questões, seja de forma{' '}
          <Link to={'/q-enem/explorar'} className='text-decoration-none text-primary fw-semibold'>
            tradicional
          </Link>{' '}
          ou pelos{' '}
          <Link
            to={'/q-enem/mais-acessados'}
            className='text-orange-500 fw-bold text-decoration-none'
          >
            Mais Acessados 🔥
          </Link>{' '}
        </li>
        <li className='list-group-item'>
          Quer dar uma praticada? Você que define o número de questões e as matérias que desejar!
          Basta seguir para{' '}
          <Link to='/q-enem/gerar-prova' className='text-decoration-none text-warning fw-semibold'>
            Gerar Prova <BsPlusCircle className='mb-1' />
          </Link>{' '}
          e, em seguida, para{' '}
          <Link to='/q-enem/provas' className='text-success text-decoration-none fw-semibold'>
            Provas <BsFileCheck className='mb-1' />
          </Link>{' '}
          ...fácil, né?
        </li>
        <li className='list-group-item text-center fw-semibold'>EM DESENVOLVIMENTO 🛠</li>
        <li className='list-group-item text-muted fw-semibold'>Desempenho</li>
        <li className='list-group-item text-muted fw-semibold'>Salvar questões e materiais</li>
      </ul>
      {/* <CardSugestao
        titulo='Desempenho'
        conteudo='Verifique seu desempenho baseado nas últimas provas 📊'
        link='desempenho'
      />
      <CardSugestao
        titulo='Materiais'
        conteudo='Consulte sua lista de materiais e questões salvos ✅'
        link='materiais'
      />
      <CardSugestao
        titulo='Explorar'
        conteudo='Explore e descubra questões e materiais, seja de forma tradicional ou pelos Mais Acessados 🔥'
        link='explorar'
      />
      <CardSugestao
        titulo='Gerar Prova'
        conteudo='Você que define o número de questões e as matérias que desejar! 📝'
        link='gerar-prova'
      /> */}
    </Container>
  )
}
