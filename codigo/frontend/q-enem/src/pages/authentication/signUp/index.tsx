import React from 'react'
import Favicon from 'assets/q-enem-website-favicon-color.png'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { BsBoxArrowRight as LoginBtn } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import AuthInput from 'components/authInput'

export default function SignUp() {
  const inputStyle = 'mb-3 w-75'
  return (
    <Form className='row g-2 d-flex w-50 m-auto justify-content-center align-items-center text-center border p-2 my-4 rounded-4 border-subtle'>
      <div className='col-6'>
        <img src={Favicon} alt='Logo do Q Enem' className='mb-1' />
      </div>
      <h1 className='h3 mb-3'>Insira seus dados para cadastro</h1>
      <AuthInput styles={inputStyle} id='newUsername' type='text' placeholder='Nome de Usuário' />
      <AuthInput styles={inputStyle} id='newCPF' type='text' placeholder='CPF' />
      <AuthInput styles={inputStyle} id='newEmail' type='email' placeholder='Email' />
      <AuthInput styles={inputStyle} id='newPassword' type='password' placeholder='Nova Senha' />
      <AuthInput
        styles={inputStyle}
        id='checkPassword'
        type='password'
        placeholder='Confirme sua Senha'
      />

      <Button variant='primary' type='submit' className='btn-lg w-75'>
        Criar conta
      </Button>
      <Link to='/entrar' className='text-decoration-none'>
        Já possui uma conta? Entrar <LoginBtn />
      </Link>
    </Form>
  )
}
