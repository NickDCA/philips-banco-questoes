import React, { useState } from 'react'
import Favicon from 'assets/q-enem-website-favicon-color.png'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { BsBoxArrowRight as LoginBtn } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
// import axios from 'axios'
import { Buffer } from 'buffer'
import { useAPI } from '../../../services/API'

type LoginForm = {
  username: string
  password: string
}

export default function Login() {
  const navigate = useNavigate()
  const api = useAPI()
  const [conta, setConta] = useState<LoginForm>({ username: '', password: '' })

  const updateConta = (field: string, e: any) => {
    setConta((conta) => ({ ...conta, [field]: e.target.value }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()

    console.log(conta)
    const basicAuth = `Basic ${Buffer.from(conta.username + ':' + conta.password).toString(
      'base64',
    )}`
    const htmlConfig = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: basicAuth,
      },
    }
    console.log(basicAuth)
    api
      .get('perfil/dados', {}, htmlConfig)
      .then((res) => {
        navigate('/aluno')
      })
      .catch((e) => {
        console.log('Error:', e)
      })
  }

  return (
    <Form
      className='row g-2 w-25 m-auto justify-content-center align-items-center text-center border p-2 my-4'
      onSubmit={handleSubmit}
    >
      <div className='col-6'>
        <img src={Favicon} alt='Logo do Q Enem' className='mb-1' />
      </div>
      <h1 className='h3 mb-3'>Login</h1>
      <Form.Group className='mb-3 text-start' controlId='formUsername'>
        <Form.Label>Usuário</Form.Label>
        <Form.Control
          type='text'
          placeholder='Seu nome de usuário'
          value={conta.username}
          onChange={(e) => updateConta('username', e)}
        />
      </Form.Group>

      <Form.Group className='mb-3 text-start' controlId='formPassword'>
        <Form.Label>Senha</Form.Label>
        <Form.Control
          type='password'
          placeholder='Sua senha'
          value={conta.password}
          onChange={(e) => updateConta('password', e)}
        />
      </Form.Group>
      <Button variant='primary' type='submit' className='btn-lg w-50'>
        Entrar
      </Button>
      <Link to='/cadastro' className='mb-3'>
        Não possui uma conta? Cadastre-se <LoginBtn />
      </Link>
    </Form>
  )
}
