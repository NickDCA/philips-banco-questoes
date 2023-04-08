import React from 'react'
import Logo from 'assets/logo-no-background.png'

export default function Footer() {
  return (
    <footer className='d-flex flex-column flex-wrap justify-content-center align-items-center border-top py-3 bg-body-secondary'>
      <a href='/' className='justify-content-center align-items-center mb-1'>
        <img src={Logo} alt='Qenem' width='60' />
      </a>
      <p className='h6 text-secondary'>@ 2023, Nicolas</p>
    </footer>
  )
}
