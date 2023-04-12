import Footer from 'components/footer'
import NavbarAluno from 'components/navbarAluno'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

export default function AlunoBase() {
  return (
    <main className='min-vh-100'>
      <NavbarAluno />
      <Container className='min-vh-100'>
        <Outlet />
      </Container>

      {/* <Cabecalho />
      <FavoritosProvider>
        <Container>
          <Outlet />
        </Container>
      </FavoritosProvider>
      <Rodape /> */}
      <Footer />
    </main>
  )
}
