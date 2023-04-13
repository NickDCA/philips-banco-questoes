import Axios, { AxiosError } from 'axios'
import { useContext, useMemo } from 'react'
import AuthContext from 'store/authContext'

export const useAPI = () => {
  const auth = useContext(AuthContext)
  const BACK_HOST: string | undefined = process.env.REACT_APP_BACK_HOST

  const defaultHttpConfig = useMemo((): any => {
    return {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: auth.user?.basicAuth,
      },
    }
  }, [auth.user])

  const get = async (url: string, params: any, httpConfig?: any): Promise<any> => {
    const response = await Axios.get(BACK_HOST + url, {
      ...(httpConfig ? httpConfig : defaultHttpConfig),
      params,
    })
    return response.data
  }

  const post = (url: string, data: any, httpConfig?: any) => {
    return Axios.post(BACK_HOST + url, data, httpConfig ? httpConfig : defaultHttpConfig)
  }

  const put = (url: string, data: any, httpConfig?: any) => {
    return Axios.put(BACK_HOST + url, data, httpConfig ? httpConfig : defaultHttpConfig)
  }

  const _delete = (url: string, httpConfig?: any) => {
    return Axios.delete(BACK_HOST + url, httpConfig ? httpConfig : defaultHttpConfig)
  }

  return { get, post, put, delete: _delete }
}
