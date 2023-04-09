import React from 'react'
import Favicon from 'assets/q-enem-website-favicon-color.png'
import Row from 'react-bootstrap/Row'
import { BsBoxArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <body>
      <main className='d-flex w-50 m-auto'>
        <form className='row g-3 w-auto m-auto justify-content-center align-items-center text-center border p-2 my-4 rounded-4 border-primary'>
          <div className='col-6'>
            <img src={Favicon} alt='' />
          </div>

          <h1 className='h3 mb-3'>Insira seus dados para o cadastro</h1>

          <div className='col-md-6 mb-2'>
            <input type='text' className='form-control' placeholder='Nome' aria-label='Nome' />
          </div>
          <div className='col-md-6 mb-2'>
            <input
              type='text'
              className='form-control'
              placeholder='Sobrenome'
              aria-label='Sobrenome'
            />
          </div>
          <div className='col-12 mb-2'>
            <input type='text' className='form-control' placeholder='CPF' aria-label='CPF' />
          </div>
          <div className='input-group col-12 mb-2'>
            <span className='input-group-text' id='basic-addon1'>
              @
            </span>
            <input
              type='email'
              className='form-control'
              placeholder='Email'
              aria-label='Email'
              aria-describedby='basic-addon1'
            />
          </div>

          <div className='col-md-6 mb-2'>
            <input
              type='password'
              className='form-control'
              placeholder='Senha'
              aria-label='Senha'
            />
          </div>
          <div className='col-md-6 mb-2'>
            <input
              type='password'
              className='form-control'
              placeholder='Confirmar Senha'
              aria-label='ConfirmarSenha'
            />
          </div>

          <h1 className='fs-5'>Desejo me cadastrar como:</h1>
          <Row>
            <div className='form-check text-start offset-lg-4 col-md-3'>
              <input
                className='form-check-input border-primary border-1'
                type='radio'
                name='flexRadioDefault'
                id='flexRadioDefault1'
              />
              <label className='form-check-label' htmlFor='flexRadioDefault1'>
                Aluno
              </label>
            </div>
            <div className='form-check text-start mb-3 col-md-3'>
              <input
                className='form-check-input border-primary border-1'
                type='radio'
                name='flexRadioDefault'
                id='flexRadioDefault2'
                checked
              />
              <label className='form-check-label' htmlFor='flexRadioDefault2'>
                Professor
              </label>
            </div>
          </Row>

          <button className='w-75 btn btn-lg btn-outline-primary' type='submit'>
            Criar conta
          </button>

          <Link to='/entrar' className='fs-5 text-decoration-none'>
            Já possui uma conta? Entrar <BsBoxArrowRight />
          </Link>
          <p className='mt-5 mb-3 text-muted'>@ 2023, Nicolas</p>
        </form>
      </main>

      <script src='node_modules/bootstrap/dist/js/bootstrap.bundle.js'></script>
    </body>
  )
}
