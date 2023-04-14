import { createContext } from 'react'
import { Questao } from 'store/questoesContext'

export type Prova = {
  id: number
  alunoId: number
  materia: string
  nota: number
  resolvida: boolean
  questoes: Questao[]
}

export type Provas = {
  provas?: Prova[]
  updateProvas?(prova: Prova[] | undefined): void
}

const provasDefault: Provas = {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ProvasContext = createContext(provasDefault)

export default ProvasContext
