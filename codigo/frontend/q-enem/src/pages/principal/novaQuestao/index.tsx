import React, { useContext, useState } from 'react'
import { Form } from 'react-bootstrap'
import { BsCheck, BsInfoCircle, BsSendCheck } from 'react-icons/bs'
import { useAPI } from 'services/API'
import AuthContext from 'store/authContext'
import { ItemQuestao } from 'store/questoesContext'

type ItemQEnviar = {
  texto: string
  correto: boolean
}

type ItemBase = {
  enunciado: string
  materia: string
  itens: ItemQEnviar[]
}

const itemBase = {
  enunciado: '',
  materia: '',
  itens: [
    {
      texto: '',
      correto: false,
    },
    {
      texto: '',
      correto: false,
    },
    {
      texto: '',
      correto: false,
    },
    {
      texto: '',
      correto: false,
    },
    {
      texto: '',
      correto: false,
    },
  ],
}

export default function NovaQuestao() {
  const auth = useContext(AuthContext)
  const api = useAPI()
  const [materia, setMateria] = useState<string>('')
  const [enunciado, setEnunciado] = useState<string>('')
  const [i1, setI1] = useState<ItemQEnviar>({ texto: '', correto: false })
  const [i2, setI2] = useState<ItemQEnviar>({ texto: '', correto: false })
  const [i3, setI3] = useState<ItemQEnviar>({ texto: '', correto: false })
  const [i4, setI4] = useState<ItemQEnviar>({ texto: '', correto: false })
  const [i5, setI5] = useState<ItemQEnviar>({ texto: '', correto: false })
  const [sucesso, setSucesso] = useState<boolean>(false)
  //const [questao, setQuestao] = useState<ItemBase>({ enunciado: '', materia: '', itensQuestao: [] })
  //   {
  // 	"enunciado": "Questão 5",
  // 	"materia": "LINGUAGENS_CODIGOS",
  // 	"itensQuestao": [
  // 		{
  // 			"texto": "Item A",
  // 			"correto": true
  // 		},
  // 		{
  // 			"texto": "Item B",
  // 			"correto": false
  // 		},
  // 		{
  // 			"texto": "Item C",
  // 			"correto": false
  // 		},
  // 		{
  // 			"texto": "Item D",
  // 			"correto": false
  // 		},
  // 		{
  // 			"texto": "Item E",
  // 			"correto": false
  // 		}
  // 	]
  // }
  function handleSelect(e: any) {
    switch (e.target.value) {
      case '1':
        setI1({ ...i1, correto: true })
        break
      case '2':
        setI2({ ...i2, correto: true })
        break
      case '3':
        setI3({ ...i3, correto: true })
        break
      case '4':
        setI4({ ...i4, correto: true })
        break
      case '5':
        setI5({ ...i5, correto: true })
        break
      default:
        console.log('uma pena, não deu certo')
    }
  }
  function handleSubmit(e: any) {
    e.preventDefault()
    console.log(
      `${materia}${enunciado}${i1.correto}${i2.correto}${i3.correto}${i4.correto}${i5.correto}`,
    )
    // setQuestao({ enunciado: enunciado, materia: materia, itens: [i1, i2, i3, i4, i5] })
    enviarProva()
  }

  function enviarProva() {
    api.post('questoes', { materia, enunciado, itensQuestao: [i1, i2, i3, i4, i5] })
    setSucesso(!sucesso)
  }

  return (
    <main className='container-fluid my-4'>
      <div className='card'>
        <div className='card-header'>
          <p className='h2 fw-semibold text-primary'>NOVA QUESTÃO</p>
          <p className='lead'>
            <BsInfoCircle className='mb-1' /> Para cadastrar uma nova questão,{' '}
            <span className='text-primary'>preencha os campos abaixo</span> e envie sua questão para
            ser certificada clicando no botão{' '}
            <span className='text-primary'>
              Enviar <BsSendCheck />
            </span>{' '}
            no final do formulário
          </p>
        </div>
        <div className='card-body'>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <p className='h3 fw-semibold mb-3'>Área do Conhecimento</p>
            <div key={5}>
              <Form.Check
                required
                onChange={(e) => {
                  //   setQuestao({...questao, materia: e.target.value})
                  setMateria(e.target.id)
                }}
                type='radio'
                label='Linguagens, Códigos e suas Tecnologias'
                id='LINGUAGENS_CODIGOS'
                name='checkMaterias'
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
              />
              <Form.Check
                required
                onChange={(e) => {
                  //   setQuestao({...questao, materia: e.target.value})
                  setMateria(e.target.id)
                }}
                type='radio'
                label='Ciências Humanas e suas Tecnologias'
                id='CIENCIAS_HUMANAS'
                name='checkMaterias'
              />
              <Form.Check
                required
                onChange={(e) => {
                  //   setQuestao({...questao, materia: e.target.value})
                  setMateria(e.target.id)
                }}
                type='radio'
                label='Ciências da Natureza e suas Tecnologias'
                id='CIENCIAS_NATUREZA'
                name='checkMaterias'
              />
              <Form.Check
                required
                onChange={(e) => {
                  //   setQuestao({...questao, materia: e.target.value})
                  setMateria(e.target.id)
                }}
                type='radio'
                label='Matemática e suas Tecnologias'
                id='MATEMATICA'
                name='checkMaterias'
              />
            </div>
            <div className='mb-3'>
              <p className='h3 fw-semibold mb-3'>Enunciado</p>
              <textarea
                required
                className='form-control border-primary-subtle'
                id='textareaEnunciado'
                rows={1}
                value={enunciado}
                // onChange={(e) => setQuestao({...questao, enunciado: e.target.value})}
                onChange={(e) => setEnunciado(e.target.value)}
                placeholder='Digite aqui o enunciado da sua questão'
              ></textarea>
            </div>
            <p className='h3 fw-semibold'>Itens</p>
            <div className='mb-3'>
              <textarea
                required
                className='form-control border-primary-subtle mb-1'
                id='itemA'
                rows={1}
                placeholder='ITEM A'
                value={i1?.texto}
                // onChange={(e) => setQuestao({...questao, itens: [...questao.itens, {texto: e.target.value, correto: false}]})}
                onChange={(e) => setI1({ ...i1, texto: e.target.value })}
              ></textarea>
              <textarea
                required
                className='form-control border-primary-subtle mb-1'
                id='itemB'
                rows={1}
                placeholder='ITEM B'
                // onChange={(e) => setQuestao({...questao, itens: [...questao.itens, {texto: e.target.value, correto: false}]})}
                value={i2.texto}
                onChange={(e) => setI2({ ...i2, texto: e.target.value })}
              ></textarea>
              <textarea
                required
                className='form-control border-primary-subtle mb-1'
                id='itemC'
                rows={1}
                placeholder='ITEM C'
                value={i3.texto}
                onChange={(e) => setI3({ ...i3, texto: e.target.value })}
                // onChange={(e) => setQuestao({...questao, itens: [...questao.itens, {texto: e.target.value, correto: false}]})}
              ></textarea>
              <textarea
                required
                className='form-control border-primary-subtle mb-1'
                id='itemD'
                rows={1}
                placeholder='ITEM D'
                value={i4.texto}
                onChange={(e) => setI4({ ...i4, texto: e.target.value })}
                // onChange={(e) => setQuestao({...questao, itens: [...questao.itens, {texto: e.target.value, correto: false}]})}
              ></textarea>
              <textarea
                required
                className='form-control border-primary-subtle mb-1'
                id='itemE'
                rows={1}
                placeholder='ITEM E'
                value={i5.texto}
                onChange={(e) => setI5({ ...i5, texto: e.target.value })}
                // onChange={(e) => setQuestao({...questao, itens: [...questao.itens, {texto: e.target.value, correto: false}]})}
              ></textarea>

              <select
                className='form-select border-primary mb-1 w-25'
                required
                aria-label='Item correto'
                onChange={(e) => handleSelect(e)}
              >
                <option defaultChecked>Selecione o item correto</option>
                <option value='1'>A</option>
                <option value='2'>B</option>
                <option value='3'>C</option>
                <option value='4'>D</option>
                <option value='5'>E</option>
              </select>
            </div>
            <button className='btn btn-lg btn-primary mt-2 mb-2' type='submit'>
              ENVIAR <BsSendCheck />
            </button>
            {sucesso ? (
              <p className='text-success'>
                Enviada com sucesso! <BsCheck />
              </p>
            ) : null}
          </Form>
        </div>
      </div>
    </main>
  )
}
