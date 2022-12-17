import { z } from 'zod'

import { SurveySchema, PayloadSchema } from './schemas'

export enum E_SurveyQuestionType {
  text = 'text',
  rating = 'rating',
}

export type T_Survey = z.infer<typeof SurveySchema>

export type T_Answer = z.infer<typeof PayloadSchema>


