import { createContext } from 'react'

export type ItemQuestao = {
  id: number
  texto: string
  correto: boolean
}

export type Questao = {
  id: number
  materia: string
  enunciado: string
  professorId: number
  certificada: boolean
  numeroAcessos: number
  itensQuestao: ItemQuestao[]
}

export type Questoes = {
  questoes?: Questao[]
  addQuestao?(questao: Questao[] | undefined): void
  salvarQuestao?(questao: Questao | undefined): void
}

const questoesDefault: Questoes = {}
//const questoesDefault: Questao[] = []

const QuestoesContext = createContext(questoesDefault)

export default QuestoesContext
