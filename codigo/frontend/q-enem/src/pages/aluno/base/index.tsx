import Footer from 'components/footer'
import NavbarAluno from 'components/navbarAluno'
import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import AuthContext from 'store/authContext'

export default function AlunoBase() {
  const auth = useContext(AuthContext)
  const RequireAuth = () => {
    const auth = useContext(AuthContext)

    console.log(auth.user)

    if (!auth.user) {
      return <Navigate to={'/entrar'} />
    }

    return null
  }
  return (
    <>
      <RequireAuth />
      <main className='min-vh-100'>
        <NavbarAluno />
        <Container className='min-vh-100'>
          <Outlet />
        </Container>
        <Footer />
      </main>
    </>
  )
}
