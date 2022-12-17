import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { T_Survey } from '../../api/survey/types'
import { T_PayloadSubmitStructure } from './types'
import { useFormik } from 'formik'
import { SurveyContext } from '../context'
import { FormValidationSchema } from './schemas'
import { E_SurveyAPIEndpoints } from '../../api/survey/endpoints'
import { generateForm } from './generate_form'
import { stripHTML } from '../../utils'
import { Button, Stack, Box, Typography } from '@mui/material'

const commonStyles = {
  bgcolor: 'background.paper',
  border: 1,
}

export const Form = ({ data }: { data: T_Survey }) => {
  const { setState } = useContext(SurveyContext)

  const navigate = useNavigate()

  const fields = data?.data?.attributes?.questions
  const formText = data?.data?.attributes

  const formik = useFormik({
    initialValues: {
      film: '',
      review: 0,
    },
    validationSchema: FormValidationSchema,
    onSubmit: () => {},
  })

  const { film, review } = formik.values
  const isDisabled = !film || !review || Object.keys(formik.errors).length > 0

  const handleSubmit = () => {
    const answers = []

    for (let element in formik.initialValues) {
      //@ts-ignore
      answers.push({ questionId: element, answer: formik.values[element] })
    }

    // payload ready to ship to database
    const payload: T_PayloadSubmitStructure = {
      data: {
        type: 'surveyAnswers',
        attributes: {
          answers: answers,
        },
      },
    }

    //@ts-ignore
    setState(answers)
    navigate(E_SurveyAPIEndpoints.success)
  }

  return (
    <Stack
      width={'100%'}
      maxWidth={650}
      textAlign={'center'}
      padding={8}
      sx={{ ...commonStyles, borderRadius: 2, borderColor: 'grey.500' }}
    >
      <Box sx={{ margin: '0 auto' }}>
        <Typography sx={{ mb: 1 }} variant="h4">
          {formText.title}
        </Typography>
        <Typography sx={{ mb: 4, maxWidth: 450 }} variant="body1">
          {stripHTML(formText.description)}
        </Typography>
      </Box>

      {fields &&
        generateForm({
          fields: fields,
          formState: formik,
        })}
      {fields && (
        <Box>
          <Button
            sx={{ width: 150, mt: 4 }}
            size="large"
            color="primary"
            variant="contained"
            type="submit"
            onClick={handleSubmit}
            disabled={isDisabled}
          >
            Submit
          </Button>
        </Box>
      )}
    </Stack>
  )
}
