import NavbarHorizontal from 'components/navbarHorizontal'
import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import heroPic from './enem-pag-inicial.jpg'
import Footer from 'components/footer'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <NavbarHorizontal />

      <Container className='flex-grow-1'>
        <div className='flex-wrap row px-4 py-4 my-5'>
          <div className='col-lg-6 col-md-12 text-lg-start text-sm-center'>
            <h1 className='display-5 fw-bold lh-1'>
              Decole nos seus estudos para o <span className='text-primary'>Enem</span> com nossas
              soluções
            </h1>
            <p className='lead mt-4'>
              Resolva provas e tenha acesso a materiais das 4 áreas do conhecimento, com questões
              certificadas pelos professores da nossa plataforma. Verifique seu desempenho sempre
              que quiser!
            </p>
            <button type='button' className='btn btn-primary btn-lg'>
              <Link to={'/entrar'} className='text-white text-decoration-none'>
                Quero decolar com o Q Enem 🚀 <span className='fs-4'>&#8594;</span>
              </Link>
            </button>
          </div>
          <div className='d-none d-lg-flex flex-wrap col-lg-6 justify-content-center align-items-stretch'>
            <img
              className='object-fit-cover border rounded'
              src={heroPic}
              alt='qenem'
              width='420'
            />
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  )
}

export default LandingPage
