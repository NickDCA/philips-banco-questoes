import { createContext } from 'react'

export type User = {
  id: number
  nome: string
  login: string
  email: string
  roles: {
    authority: string
  }[]
}

export type AuthType = {
  user?: User
  updateUser?(user: User | undefined): void
}

const authDefault: AuthType = {}

const AuthContext = createContext(authDefault)

export default AuthContext
