import React from 'react'
import Logo from 'assets/logo-no-background.png'
import {
  BsHouse as Home,
  BsSpeedometer2 as Desempenho,
  BsFolder2 as Materiais,
  BsSearch as Explorar,
  BsJournalCheck as GerarProva,
} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

export default function NavbarAluno() {
  return (
    <Navbar bg='light' expand='lg'>
      <Container className='fs-5'>
        <Navbar.Brand>
          <img src={Logo} alt='logo q-enem' width='80' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />

        <Navbar.Collapse id='basic-navbar-nav' className='flex-grow-0'>
          <Nav className='nav'>
            <Nav.Link className='mx-2'>
              <Link to='/aluno/' className='link-dark text-decoration-none'>
                <Home className='mb-1' />
                <span className='ms-2'>Início</span>
              </Link>
            </Nav.Link>
            <Nav.Link className='mx-2'>
              <Link to='desempenho' className='link-dark text-decoration-none'>
                <Desempenho className='mb-1' />
                <span className='ms-2'>Desempenho</span>
              </Link>
            </Nav.Link>
            <Nav.Link className='mx-2'>
              <Link to='materiais' className='link-dark text-decoration-none'>
                <Materiais className='mb-1' />
                <span className='ms-2'>Materiais</span>
              </Link>
            </Nav.Link>

            <Nav.Link className='mx-2'>
              <Link to='explorar' className='link-dark text-decoration-none'>
                <Explorar className='mb-1' />
                <span className='ms-2'>Explorar</span>
              </Link>
            </Nav.Link>
            <Nav.Link className='mx-2'>
              <Link to='gerar-prova' className='link-dark text-decoration-none'>
                <GerarProva className='mb-1' />
                <span className='ms-2'>Gerar Prova</span>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
