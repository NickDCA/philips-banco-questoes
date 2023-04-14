import Base from 'pages/principal/base'
import Desempenho from 'pages/principal/desempenho'
import Explorar from 'pages/principal/explorar'
import Inicio from 'pages/principal/inicio'
import Login from 'pages/authentication/login'
import LandingPage from 'pages/landingPage'
import NotFound from 'pages/notFound'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import AuthContext from 'store/authContext'
import React, { useContext } from 'react'
import QuestaoPagina from 'components/questaoPagina'
import MaisAcessados from 'pages/principal/mais-acessadas'
import GerarProva from 'pages/principal/gerarProva'
import Provas from 'pages/principal/provas'
import ProvaSimulado from 'pages/principal/prova'
import NovaQuestao from 'pages/principal/novaQuestao'

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
          <Route path={'home'} element={<Inicio />} />
          <Route path={'desempenho'} element={<Desempenho />} />
          <Route path={'explorar'} element={<Explorar />} />
          <Route path={'mais-acessados'} element={<MaisAcessados />} />
          <Route path={'/q-enem/explorar/questao/:id'} element={<QuestaoPagina />} />
          <Route path={'/q-enem/mais-acessados/questao/:id'} element={<QuestaoPagina />} />
          <Route path={'gerar-prova'} element={<GerarProva />} />
          <Route path={'provas'} element={<Provas />} />
          <Route path={'/q-enem/provas/prova/:id'} element={<ProvaSimulado />} />
          <Route path={'nova-questao'} element={<NovaQuestao />} />
        </Route>
      </Route>
    </Routes>
  )
}
