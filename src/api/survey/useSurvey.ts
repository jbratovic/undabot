import { useEffect, useState } from 'react'
import { surveyAPIRest } from './rest_api'

type T_State = {
  loading: boolean
  data: any
  error: Error | null
}

export const useSurvey = () => {
  const [state, setState] = useState<T_State>({
    loading: false,
    data: null,
    error: null,
  })

  useEffect(() => {
    setState({
      loading: true,
      data: null,
      error: null,
    })

    surveyAPIRest
      .getSurvey()
      .then((data) => {
        setState({
          loading: false,
          data: data,
          error: null,
        })
      })
      .catch((err) => {
        setState({
          loading: false,
          data: null,
          error: err,
        })
      })
  }, [])

  return state
}
