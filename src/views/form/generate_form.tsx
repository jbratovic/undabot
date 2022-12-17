import React, { useState } from 'react'
import { TFormGeneratorConfig } from './types'
import { E_SurveyQuestionType } from '../../api/survey/types'
import { TextField, Rating, Typography } from '@mui/material'
import { Grid } from '@mui/material'

export const generateForm = (formGeneratorConfig: TFormGeneratorConfig): Array<React.ReactNode> => {
  return formGeneratorConfig.fields.map((field) => {
    return (
      <Grid key={field?.label}>
        {field.questionType === E_SurveyQuestionType.text && (
          <TextField
            sx={{ pb: 4 }}
            fullWidth
            id={field?.questionId}
            name="film"
            type={field?.questionType}
            label={field?.label}
            value={formGeneratorConfig.formState.values.film}
            onChange={formGeneratorConfig.formState.handleChange}
            error={Boolean(formGeneratorConfig.formState.errors.film)}
            helperText={formGeneratorConfig.formState.errors.film}
            required={field?.required}
          />
        )}
        {field.questionType === E_SurveyQuestionType.rating && (
          <>
            <Typography sx={{ pb: 1 }} variant="subtitle1">
              {field?.label}
            </Typography>

            <Rating
              id={field?.questionId}
              typeof={field?.questionType}
              name="review"
              size="large"
              aria-required={field?.required}
              value={parseInt(formGeneratorConfig.formState.values.review)}
              onChange={formGeneratorConfig.formState.handleChange}
              //@ts-ignore
              max={field?.attributes?.max}
            />
          </>
        )}
      </Grid>
    )
  })
}
