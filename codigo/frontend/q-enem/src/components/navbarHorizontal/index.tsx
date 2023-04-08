import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Logo from 'assets/logo-no-background.png'
import { Link } from 'react-router-dom'
export default function NavbarHorizontal() {
  return (
    <Navbar bg='light' expand='lg'>
      <Container className='justify-content-between'>
        <Navbar.Brand href='#home'>
          <img src={Logo} alt='' width='80' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' className='text-primary' />
        <Navbar.Collapse id='basic-navbar-nav' className='flex-grow-0'>
          <Nav>
            <Nav.Link href='#home' className='mx-2'>
              <Link to='/' className='text-decoration-none'>
                INÍCIO
              </Link>
            </Nav.Link>
            <Nav.Link href='#link' className='mx-2'>
              <Link to='/entrar' className='text-decoration-none'>
                ENTRAR
              </Link>
            </Nav.Link>
            <Nav.Link href='#criar-conta' className='mx-2'>
              <Link to='/cadastro' className='text-decoration-none'>
                CRIAR CONTA
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
