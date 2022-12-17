import React, { createContext, useMemo, useState } from 'react'
import { PayloadAnswersSchema } from '../api/survey/schemas'

type SurveyContextProviderProps = {
  children: React.ReactNode
}

interface ISurveyContext {
    state: typeof PayloadAnswersSchema[]
    setState: (newState: typeof PayloadAnswersSchema[]) => void
}

export const SurveyContext = createContext<ISurveyContext>({} as ISurveyContext)

export const SurveyContextProvider = ({ children }: SurveyContextProviderProps) => {
  const [state, setState] = useState<typeof PayloadAnswersSchema[]>([])

  const value = useMemo(() => ({
    state,
    setState
  }), [state, setState])

  return <SurveyContext.Provider value={value}>{children}</SurveyContext.Provider>
}
