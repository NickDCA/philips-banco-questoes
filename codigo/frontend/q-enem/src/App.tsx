import { useState } from 'react'
import './css/custom.min.css'
import './css/custom.min.css.map'
import MainRouter from 'routes'
import AuthContext, { User } from 'store/authContext'
import QuestoesContext, { Questoes } from 'store/questoesContext'
import ProvasContext, { Provas } from 'store/provaContext'

export default function App() {
  const [user, setUser] = useState<User>()
  const [questoes, setQuestoes] = useState<Questoes>()
  const [provas, setProvas] = useState<Provas>()
  return (
    <AuthContext.Provider value={{ user, updateUser: setUser }}>
      <QuestoesContext.Provider value={{ questoes, addQuestao: setQuestoes } as any}>
        <ProvasContext.Provider value={{ provas, updateProvas: setProvas } as any}>
          <MainRouter />
        </ProvasContext.Provider>
      </QuestoesContext.Provider>
    </AuthContext.Provider>
  )
}
