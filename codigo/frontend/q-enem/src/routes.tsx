import LandingPage from 'pages/landingPage'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './css/custom.min.css'
import './css/custom.min.css.map'
import Login from 'pages/authentication/login'
import SignUp from 'pages/authentication/signUp'

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/cadastro' element={<SignUp />} />
          <Route path='/entrar' element={<Login />} />
          {/* <Route path="favoritos" element={<Favoritos />}/>
          <Route path=":id" element={<Player />} />
          <Route path="*" element={<NaoEncontrada />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}
