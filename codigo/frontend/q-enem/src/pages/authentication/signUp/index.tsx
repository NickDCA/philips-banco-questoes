import React from 'react'
import Favicon from 'assets/q-enem-website-favicon-color.png'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { BsBoxArrowRight } from 'react-icons/bs'
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
        style='mb-3'
        id='newUsername'
        type='text'
        placeholder='Nome de usuário'
        required={true}
      />
      <Form.Group className='mb-3' controlId='formEmail'>
        <Form.Control type='email' placeholder='Seu melhor email' />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formSenha'>
        <Form.Control type='password' placeholder='Nova senha' />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formConfirmarSenha'>
        <Form.Control type='password' placeholder='Confirmar senha' />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicCheckbox'>
        <Form.Check type='checkbox' label='Check me out' />
      </Form.Group>
      <Button variant='primary' type='submit' className='btn-lg w-75'>
        Criar conta
      </Button>
    </Form>
  )
}
