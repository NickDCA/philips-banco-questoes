import CardSugestao from 'components/card-sugestao'
import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import AuthContext from 'store/authContext'

export default function Inicio() {
  const auth = useContext(AuthContext)
  return (
    <Container className='row my-3 g-3 justify-content-center'>
      <CardSugestao
        titulo='Desempenho'
        conteudo='Verifique seu desempenho baseado nas últimas provas 📊'
        link='desempenho'
      />
      <CardSugestao
        titulo='Materiais'
        conteudo='Consulte sua lista de materiais e questões salvos ✅'
        link='materiais'
      />
      <CardSugestao
        titulo='Explorar'
        conteudo='Explore e descubra questões e materiais, seja de forma tradicional ou pelos Mais Acessados 🔥'
        link='explorar'
      />
      <CardSugestao
        titulo='Gerar Prova'
        conteudo='Você que define o número de questões e as matérias que desejar! 📝'
        link='gerar-prova'
      />
    </Container>
  )
}
