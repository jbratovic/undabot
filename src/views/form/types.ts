export type TQuestionField = {
  questionId: string
  questionType: string
  label: string
  required: boolean
  attributes: Object | null
}

type T_Questions = {
  questionId: string
  answer: string
}

type T_PayloadStructure = {
  type: string
  attributes: {
    answers: T_Questions[]
  }
}

export type T_PayloadSubmitStructure = {
  data: T_PayloadStructure
}

export type TFormValidatorForm = { [key: string]: any }

export type TFormGeneratorConfig = {
  fields: Array<TQuestionField>
  formState: TFormValidatorForm
}
