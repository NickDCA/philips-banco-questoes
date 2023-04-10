import axios from 'axios'

export const useAPI = () => {
  const URL_BASE: string | undefined = process.env.REACT_APP_BACK_HOST
  console.log('URL - ' + URL_BASE)
  const defaultConfigHtml = () => {
    return {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    }
  }
  const get = (url: string, params: any, config?: any) => {
    return axios.get(URL_BASE + url, !config ? defaultConfigHtml() : config)
  }

  return { get }
}
