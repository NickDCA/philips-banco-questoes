import { useState } from 'react'
import './css/custom.min.css'
import './css/custom.min.css.map'
import MainRouter from 'routes'
import AuthContext, { User } from 'store/authContext'

export default function App() {
  const [user, setUser] = useState<User>()

  return (
    <AuthContext.Provider value={{ user, updateUser: setUser }}>
      <MainRouter />
    </AuthContext.Provider>
  )
}
