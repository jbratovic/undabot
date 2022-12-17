import { surveyAPI } from '../index'
import { T_Survey, T_Answer } from './types'
import { SurveySchema, PayloadSchema } from './schemas'
import { E_SurveyAPIEndpoints } from './endpoints'

export const surveyAPIRest = {
  getSurvey: async (): Promise<T_Survey> => {
    const response = await surveyAPI({
      method: 'get',
      url: E_SurveyAPIEndpoints.survey,
    })

    return SurveySchema.parse(response.data)
  },
  postSurvey: async (): Promise<T_Answer> => {
    const response = await surveyAPI({
      method: 'post',
      url: E_SurveyAPIEndpoints.success,
    })

    return PayloadSchema.parse(response.data)
  },
}
