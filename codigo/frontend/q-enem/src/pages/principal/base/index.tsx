import Footer from 'components/footer'
import NavbarApp, { NavbarAppProps } from 'components/navbarAluno'
import { Outlet } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from 'store/authContext'
import {
  BsFileEarmarkCheck,
  BsFileEarmarkCheckFill,
  BsFileEarmarkPdf,
  BsFilePlus,
  BsFire,
  BsHouse,
  BsJournalCheck,
  BsSearch,
  BsSpeedometer2,
} from 'react-icons/bs'
import { Container } from 'react-bootstrap'
import React from 'react'
import { BsFileEarmarkPlus } from 'react-icons/bs'

export default function Base() {
  const auth = useContext(AuthContext)
  const menuLinks: { [role: string]: NavbarAppProps } = {
    ROLE_ADMIN: {
      links: [
        {
          text: 'Home',
          path: 'home',
          icon: <BsHouse />,
        },
        {
          text: 'Desempenho',
          path: 'desempenho',
          icon: <BsSpeedometer2 />,
        },
        {
          text: 'Gerar Prova',
          path: 'gerar-prova',
          icon: <BsJournalCheck />,
        },
      ],
      dropLinks: [
        {
          text: 'Salvos',
          path: 'salvos',
          icon: <BsFileEarmarkCheck />,
        },
        {
          text: 'Explorar',
          path: 'explorar',
          icon: <BsSearch />,
        },
        {
          text: 'Mais Acessados',
          path: 'mais-acessados',
          icon: <BsFire />,
        },
      ],
    },
    ROLE_PROFESSOR: {
      links: [
        {
          text: 'Home',
          path: 'home',
          icon: <BsHouse />,
        },
        {
          text: 'Questão',
          path: 'nova-questao',
          icon: <BsFilePlus />,
        },
        {
          text: 'Material',
          path: 'novo-material',
          icon: <BsFileEarmarkPdf />,
        },
      ],
      dropLinks: [],
    },
    ROLE_ALUNO: {
      links: [
        {
          text: 'Home',
          path: 'home',
          icon: <BsHouse />,
        },
        {
          text: 'Desempenho 🛠',
          path: 'desempenho',
          icon: <BsSpeedometer2 />,
        },
        {
          text: 'Gerar Prova',
          path: 'gerar-prova',
          icon: <BsFileEarmarkPlus />,
        },
        {
          text: 'Provas',
          path: 'provas',
          icon: <BsFileEarmarkCheck />,
        },
      ],
      dropLinks: [
        {
          text: 'Salvos 🛠',
          path: 'salvos',
          icon: <BsFileEarmarkCheck />,
        },
        {
          text: 'Explorar',
          path: 'explorar',
          icon: <BsSearch />,
        },
        {
          text: 'Mais Acessados',
          path: 'mais-acessados',
          icon: <BsFire />,
        },
      ],
    },
  }
  return (
    <main className='min-vh-100'>
      <NavbarApp {...menuLinks[auth.user?.roles[0].authority || 'UNDEFINED']} />
      <Container className='min-vh-100'>
        <Outlet />
      </Container>

      <Footer />
    </main>
  )
}
