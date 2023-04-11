import AlunoBase from 'pages/aluno/base'
import AlunoDesempenho from 'pages/aluno/desempenho'
import AlunoInicio from 'pages/aluno/home'
import Login from 'pages/authentication/login'
import LandingPage from 'pages/landingPage'
import NotFound from 'pages/notFound'
import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'

export default function MainRouter() {
  return (
    <Routes>
      <Route element={<Outlet />} errorElement={<NotFound />}>
        <Route path={'/'} element={<LandingPage />} />
        <Route path={'/entrar'} element={<Login />} />

        <Route path={'/aluno/'} element={<AlunoBase />}>
          <Route index element={<AlunoInicio />} />
          <Route path={'desempenho'} element={<AlunoDesempenho />} />
        </Route>
      </Route>
    </Routes>
  )
}
