import React from 'react'

export default function AlunoDesempenho() {
  return (
    <body>
      <main className='d-flex'>
        <div className='container-md bg-white'>
          <div className='row justify-content-center text-center my-4 g-3'>
            <p className='col-8 h2 fw-bold'>MEU DESEMPENHO (WIP)</p>
            <p className='lead'>
              Confira seus <span className='text-danger fw-semibold'>Erros</span> e
              <span className='text-success fw-semibold'>Acertos</span> em cada uma das áreas do
              conhecimento
            </p>

            <div className='col-md-6 mb-3'>
              <div className='card'>
                <div className='card-header bg-primary text-white'>
                  <h2>HUMANAS</h2>
                </div>
                <div className='card-body bg-light'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='120'
                    height='120'
                    fill='currentColor'
                    className='bi bi-pie-chart'
                    viewBox='0 0 16 16'
                  >
                    <path d='M7.5 1.018a7 7 0 0 0-4.79 11.566L7.5 7.793V1.018zm1 0V7.5h6.482A7.001 7.001 0 0 0 8.5 1.018zM14.982 8.5H8.207l-4.79 4.79A7 7 0 0 0 14.982 8.5zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z' />
                  </svg>
                </div>
              </div>
            </div>
            <div className='col-md-6 mb-3'>
              <div className='card'>
                <div className='card-header bg-primary text-white'>
                  <h2>LINGUAGENS</h2>
                </div>
                <div className='card-body bg-light'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='120'
                    height='120'
                    fill='currentColor'
                    className='bi bi-pie-chart'
                    viewBox='0 0 16 16'
                  >
                    <path d='M7.5 1.018a7 7 0 0 0-4.79 11.566L7.5 7.793V1.018zm1 0V7.5h6.482A7.001 7.001 0 0 0 8.5 1.018zM14.982 8.5H8.207l-4.79 4.79A7 7 0 0 0 14.982 8.5zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z' />
                  </svg>
                </div>
              </div>
            </div>
            <div className='col-md-6 mb-3'>
              <div className='card'>
                <div className='card-header bg-primary text-white'>
                  <h2>NATUREZA</h2>
                </div>
                <div className='card-body bg-light'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='120'
                    height='120'
                    fill='currentColor'
                    className='bi bi-pie-chart'
                    viewBox='0 0 16 16'
                  >
                    <path d='M7.5 1.018a7 7 0 0 0-4.79 11.566L7.5 7.793V1.018zm1 0V7.5h6.482A7.001 7.001 0 0 0 8.5 1.018zM14.982 8.5H8.207l-4.79 4.79A7 7 0 0 0 14.982 8.5zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z' />
                  </svg>
                </div>
              </div>
            </div>
            <div className='col-md-6 mb-3'>
              <div className='card'>
                <div className='card-header bg-primary text-white'>
                  <h2>MATEMÁTICA</h2>
                </div>
                <div className='card-body bg-light'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='120'
                    height='120'
                    fill='currentColor'
                    className='bi bi-pie-chart'
                    viewBox='0 0 16 16'
                  >
                    <path d='M7.5 1.018a7 7 0 0 0-4.79 11.566L7.5 7.793V1.018zm1 0V7.5h6.482A7.001 7.001 0 0 0 8.5 1.018zM14.982 8.5H8.207l-4.79 4.79A7 7 0 0 0 14.982 8.5zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z' />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <script src='node_modules/bootstrap/dist/js/bootstrap.bundle.js'></script>
    </body>
  )
}
