import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AlunoBase() {
  return (
    <main>
      <Outlet />
      {/* <Cabecalho />
      <FavoritosProvider>
        <Container>
          <Outlet />
        </Container>
      </FavoritosProvider>
      <Rodape /> */}
    </main>
  )
}
