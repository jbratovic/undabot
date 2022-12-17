import * as yup from 'yup'

export const FormValidationSchema = yup.object({
  film: yup.string().min(1).required('Film is required!'),
  review: yup.number().min(1).max(5).required(),
})
