import axios from 'axios'

import { SURVEY_API_MOCK_DATA, ANSWER_API_MOCK_DATA } from './survey/mock_data'
import { E_SurveyAPIEndpoints } from './survey/endpoints'
import { wait } from '../utils'
import { getPostedData } from './survey/mock_data'

const BASE_SURVEY_API_URL = 'http://localhost:3000/api/v1'
const SHOULD_MOCK = process.env.REACT_APP_MOCK_SURVEY_API === 'true'

export const surveyAPI = axios.create({
  baseURL: BASE_SURVEY_API_URL,
})

surveyAPI.interceptors.request.use(
  async (config) => {
    if (!SHOULD_MOCK) {
      return config
    }

    if (config.method === 'get') {
      await wait()
      throw { data: SHOULD_MOCK && SURVEY_API_MOCK_DATA[config.url as E_SurveyAPIEndpoints.survey] }
    }

    if (config.method === 'post') {
      await wait()
      throw { data: SHOULD_MOCK && ANSWER_API_MOCK_DATA[config.url as E_SurveyAPIEndpoints.success] }
    }
    throw { data: { info: 'default value' } }
  },
  (err) => (SHOULD_MOCK ? Promise.resolve(err) : Promise.reject(err)),
)

surveyAPI.interceptors.response.use(undefined, (err) => (SHOULD_MOCK ? Promise.resolve(err) : Promise.reject(err)))
