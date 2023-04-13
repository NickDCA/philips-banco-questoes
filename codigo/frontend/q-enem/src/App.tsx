import { useState } from 'react'
import './css/custom.min.css'
import './css/custom.min.css.map'
import MainRouter from 'routes'
import AuthContext, { User } from 'store/authContext'
import QuestoesContext, { Questao, Questoes } from 'store/questoesContext'

export default function App() {
  const [user, setUser] = useState<User>()
  const [questoes, setQuestoes] = useState<Questoes>()
  return (
    <AuthContext.Provider value={{ user, updateUser: setUser }}>
      <QuestoesContext.Provider value={{ questoes, addQuestao: setQuestoes } as any}>
        <MainRouter />
      </QuestoesContext.Provider>
    </AuthContext.Provider>
  )
}
