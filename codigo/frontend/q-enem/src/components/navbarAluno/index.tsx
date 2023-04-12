import React, { useContext } from 'react'
import Logo from 'assets/logo-no-background.png'
import { BsFolder2 as Materiais } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavDropdown } from 'react-bootstrap'
import AuthContext from 'store/authContext'

type Link = {
  text: string
  path: string
  icon: JSX.Element
}

export type NavbarAppProps = {
  links: Link[]
  dropLinks: Link[]
}

export default function NavbarApp({ links, dropLinks }: NavbarAppProps) {
  const auth = useContext(AuthContext)
  function titleDropdown() {
    return (
      <>
        <Materiais className='mb-1' />
        <span className='ms-2'>Materiais e Questões</span>
      </>
    )
  }

  return (
    <Navbar bg='light' expand='lg'>
      <Container className='fs-5'>
        <Navbar.Brand>
          <Link to='/'>
            <img src={Logo} alt='logo q-enem' width='80' />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />

        <Navbar.Collapse id='basic-navbar-nav' className='flex-grow-0'>
          <Nav className='nav'>
            {links.map((link) => {
              return (
                <Nav.Link key={link.path} className='mx-2'>
                  <Link to={link.path} className='link-dark text-decoration-none'>
                    <span className='mb-1'>{link.icon}</span>
                    <span className='ms-2'>{link.text}</span>
                  </Link>
                </Nav.Link>
              )
            })}
            {/* <Nav.Link className='mx-2'>
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
              <Link to='gerar-prova' className='link-dark text-decoration-none'>
                <GerarProva className='mb-1' />
                <span className='ms-2'>Gerar Prova</span>
              </Link>
            </Nav.Link> */}
            {auth.user?.roles[0].authority !== 'ROLE_PROFESSOR' ? (
              <NavDropdown title={titleDropdown()} id='basic-nav-dropdown'>
                {dropLinks.map((link) => {
                  return (
                    <NavDropdown.Item key={link.path} className='mx-2'>
                      <Link to={link.path} className='link-dark text-decoration-none'>
                        <span className='mb-1'>{link.icon}</span>
                        <span className='ms-2'>{link.text}</span>
                      </Link>
                    </NavDropdown.Item>
                  )
                })}
                {/* <NavDropdown.Item>
                  <Link to='salvos' className='link-dark text-decoration-none'>
                    <Salvos className='mb-1' />
                    <span className='ms-2'>Salvos</span>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to='explorar' className='link-dark text-decoration-none'>
                    <Explorar className='mb-1' />
                    <span className='ms-2'>Explorar</span>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to='mais-acessados' className='link-dark text-decoration-none'>
                    <MaisAcessados className='mb-1' />
                    <span className='ms-2'>Mais Acessados </span>
                  </Link>
                </NavDropdown.Item> */}
              </NavDropdown>
            ) : null}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
