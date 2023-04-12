import Footer from 'components/footer'
import NavbarApp, { NavbarAppProps } from 'components/navbarAluno'
import { Outlet } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from 'store/authContext'
import {
  BsFileEarmarkPdf,
  BsFilePlus,
  BsFire,
  BsHouse,
  BsJournalCheck,
  BsSearch,
  BsSpeedometer2,
} from 'react-icons/bs'

export default function Base() {
  const auth = useContext(AuthContext)
  const menuLinks: { [role: string]: NavbarAppProps } = {
    ROLE_ADMIN: {
      links: [
        {
          text: 'Home',
          path: 'q-enem/home',
          icon: <BsHouse />,
        },
        {
          text: 'Desempenho',
          path: 'q-enem/desempenho',
          icon: <BsSpeedometer2 />,
        },
        {
          text: 'Gerar Prova',
          path: 'q-enem/gerar-prova',
          icon: <BsJournalCheck />,
        },
      ],
      dropLinks: [
        {
          text: 'Salvos',
          path: 'q-enem/salvos',
          icon: <BsHouse />,
        },
        {
          text: 'Explorar',
          path: 'q-enem/explorar',
          icon: <BsSearch />,
        },
        {
          text: 'Mais Acessados',
          path: 'q-enem/mais-acessados',
          icon: <BsFire />,
        },
      ],
    },
    ROLE_PROFESSOR: {
      links: [
        {
          text: 'Home',
          path: 'q-enem/home',
          icon: <BsHouse />,
        },
        {
          text: 'Questão',
          path: 'q-enem/nova-questao',
          icon: <BsFilePlus />,
        },
        {
          text: 'Material',
          path: 'q-enem/novo-material',
          icon: <BsFileEarmarkPdf />,
        },
      ],
      dropLinks: [],
    },
    ROLE_ALUNO: {
      links: [
        {
          text: 'Home',
          path: 'q-enem/home',
          icon: <BsHouse />,
        },
        {
          text: 'Desempenho',
          path: 'q-enem/desempenho',
          icon: <BsSpeedometer2 />,
        },
        {
          text: 'Gerar Prova',
          path: 'q-enem/gerar-prova',
          icon: <BsJournalCheck />,
        },
      ],
      dropLinks: [
        {
          text: 'Salvos',
          path: 'q-enem/salvos',
          icon: <BsHouse />,
        },
        {
          text: 'Explorar',
          path: 'q-enem/explorar',
          icon: <BsSearch />,
        },
        {
          text: 'Mais Acessados',
          path: 'q-enem/mais-acessados',
          icon: <BsFire />,
        },
      ],
    },
  }
  return (
    <>
      <NavbarApp {...menuLinks[auth.user?.roles[0].authority || 'UNDEFINED']} />

      <Outlet />

      <Footer />
    </>
  )
}
