import { transform } from 'typescript'
import { z } from 'zod'

export const SurveyQuestionSchema = z.object({
  questionId: z.string(),
  questionType: z.string(),
  label: z.string(),
  required: z.boolean(),
  attributes: z.object({ min: z.number() }).passthrough().partial().nullable(),
})
export const SurveySchema = z.object({
  data: z.object({
    type: z.string(),
    id: z.string().uuid(),
    attributes: z.object({
      title: z.string(),
      description: z.string(),
      questions: z.array(SurveyQuestionSchema),
    }),
  }),
})

export const PayloadAnswersSchema = z.object({
  questionId: z.string(),
  answer: z.string(),
})
export const PayloadSchema = z.object({
  data: z.object({
    type: z.string(),
    attributes: z.object({
      answers: z.array(PayloadAnswersSchema),
    }),
  }),
})
