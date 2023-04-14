/* eslint-disable array-callback-return */
import ProvaCard from 'components/provaCard'
import React, { useContext, useState, useEffect } from 'react'
import { useAPI } from 'services/API'
import AuthContext from 'store/authContext'
import { Prova } from 'store/provaContext'

export default function Provas() {
  const api = useAPI()
  const auth = useContext(AuthContext)
  const [provas, setProvas] = useState<Prova[]>([])

  useEffect(() => {
    api.get('provas?materia=', {}).then((res) => {
      setProvas(res)
      console.log(res)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.user])
  return (
    <div className='container p-2 my-3'>
      <h2 className='text-center'>MINHAS PROVAS 📝</h2>
      <div className='list-group mt-3'>
        {provas.map((prova) => (
          <ProvaCard children={prova} />
        ))}
      </div>
    </div>
  )
}
