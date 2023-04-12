import Base from 'pages/aluno/base'
import AlunoDesempenho from 'pages/aluno/desempenho'
import AlunoExplorar from 'pages/aluno/explorar'
import AlunoInicio from 'pages/aluno/inicio'
import Login from 'pages/authentication/login'
import LandingPage from 'pages/landingPage'
import NotFound from 'pages/notFound'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import AuthContext from 'store/authContext'
import React, { useContext } from 'react'

const RequireAuth = ({ children }: { children: any }) => {
  const auth = useContext(AuthContext)

  if (!auth.user) {
    return <Navigate to={'/entrar'} />
  }

  return children
}

export default function MainRouter() {
  return (
    <Routes>
      <Route element={<Outlet />} errorElement={<NotFound />}>
        <Route path={'/'} element={<LandingPage />} />
        <Route path={'/entrar'} element={<Login />} />

        <Route
          path={'/q-enem'}
          element={
            <RequireAuth>
              <Base />
            </RequireAuth>
          }
        >
          <Route path={'/q-enem/inicio'} element={<AlunoInicio />} />
          <Route path={'desempenho'} element={<AlunoDesempenho />} />
          <Route path={'explorar'} element={<AlunoExplorar />} />
        </Route>
      </Route>
    </Routes>
  )
}
