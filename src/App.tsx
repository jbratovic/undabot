import React, { FC } from 'react'
import { Routes, Route } from 'react-router-dom'

import { SurveyView } from './views/survey'
import { SuccessView } from './views/success'
import { E_Routes } from './routes'

export const App = () => {
  return (
    <Routes>
      <Route path={E_Routes.survey} element={<SurveyView />} />
      <Route path={E_Routes.success} element={<SuccessView />} />
      <Route path={'/*'} element={<SurveyView />} />
    </Routes>
  )
}
