import React from 'react'
import Favicon from 'assets/q-enem-website-favicon-color.png'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { BsBoxArrowRight as LoginBtn } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import AuthInput from 'components/authInput'

export default function SignUp() {
  return (
    <Form className='row g-2 d-flex w-50 m-auto justify-content-center align-items-center text-center border p-2 my-4 rounded-4 border-subtle'>
      <div className='col-6'>
        <img src={Favicon} alt='Logo do Q Enem' className='mb-1' />
      </div>
      <h1 className='h3 mb-3'>Insira seus dados para cadastro</h1>
      <AuthInput
        styles='col-md-6'
        id='newUsername'
        type='text'
        placeholder='ex: usuário123'
        label='Nome de Usuário'
      />
      <AuthInput
        styles='col-md-6'
        id='newEmail'
        type='email'
        placeholder='ex: meuemail@exemplo.com'
        label='Email'
      />
      <AuthInput styles='' id='newCPF' type='text' placeholder='ex: 12345678912' label='CPF' />

      <AuthInput
        styles=''
        id='newPassword'
        type='password'
        placeholder='ex: minhasenha123'
        label='Nova Senha'
      />
      <AuthInput
        styles=''
        id='checkPassword'
        type='password'
        placeholder='ex: minhasenha123'
        label='Confirme sua Senha'
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
