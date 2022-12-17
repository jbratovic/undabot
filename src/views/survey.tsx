import { useSurvey } from '../api/survey'
import { Form } from './form'
import { Stack, CircularProgress, Alert } from '@mui/material'

export const SurveyView = () => {
  const { loading, data, error } = useSurvey()

  return (
    <Stack
      p={4}
      flexDirection={'row'}
      justifyContent={'center'}
      alignItems={'center'}
      sx={{ height: 'calc(100vh - 80px)' }}
    >
      {loading && <CircularProgress size={60} />}
      {error && <Alert severity="error">{`${error}`}</Alert>}
      {data && <Form data={data} />}
    </Stack>
  )
}
