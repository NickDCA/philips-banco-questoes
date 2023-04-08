import LandingPage from 'pages/landingPage'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './css/custom.min.css'
import './css/custom.min.css.map'

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          {/* <Route path="favoritos" element={<Favoritos />}/>
          <Route path=":id" element={<Player />} />
          <Route path="*" element={<NaoEncontrada />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}
