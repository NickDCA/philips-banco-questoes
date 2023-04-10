export interface IAccount {
  name: string
  username: string
  email: string
  senha: string
  confirmaSenha: string
  aluno: boolean
  certificador: boolean
}

export type IAccountContext = {
  accounts: IAccount
  addAccount: (account: IAccount) => void
  updateAccount: (id: number) => void
}
