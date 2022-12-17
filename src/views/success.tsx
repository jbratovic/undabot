import React, { useEffect, useContext } from 'react'
import { surveyAPIRest } from '../api/survey/rest_api'
import { usePostSurvey } from '../api/survey/usePostSurvey'
import { SurveyContext } from './context'
import {
  Stack,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Alert,
} from '@mui/material'

const commonStyles = {
  bgcolor: 'background.paper',
  border: 1,
}

export const SuccessView = () => {
  const { loading, data, error } = usePostSurvey()
  const { state } = useContext(SurveyContext)

  function createData(question: string, answer: number) {
    return { question, answer }
  }

  const rows = state.map((item) => {
    //@ts-ignore
    return createData(item.questionId, item.answer)
  })

  return (
    <Stack
      p={4}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      sx={{ height: 'calc(100vh - 80px)' }}
    >
      {loading && <CircularProgress size={60} />}
      {error && <Alert severity="error">{`${error}`}</Alert>}
      {data && (
        <Box padding={8} sx={{ ...commonStyles, borderRadius: 2, borderColor: 'grey.500', textAlign: 'center' }}>
          <Typography variant="h5">Thank you for participating in rating a film.</Typography>
          <Typography variant="body1">Below is a preview of the questions and answers that were submitted.</Typography>

          <TableContainer sx={{ mt: 4 }} component={Paper}>
            <Table sx={{ minWidth: 200 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Questions</TableCell>
                  <TableCell align="right">Answers</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.question} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {row.question}
                    </TableCell>
                    <TableCell align="right">{row.answer}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </Stack>
  )
}
