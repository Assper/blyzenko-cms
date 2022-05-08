import React, { createContext, useLayoutEffect, useState } from 'react'
import { ErrorModal } from '../components/ErrorModal'

export const initialErrorState = {
  isError: false,
  message: ''
}

const defaultErrorValue = {
  ...initialErrorState,
  setState: () => {
    return
  }
}

let errorState = { ...defaultErrorValue }
export const getErrorState = () => errorState
export const ErrorContext = createContext(defaultErrorValue)
ErrorContext.displayName = 'ErrorContext'

export const ErrorProvider = ({ children }) => {
  const handleState = (data) => setState({ ...errorState, ...data })
  const [state, setState] = useState({
    ...errorState,
    setState: handleState
  })

  const handleClose = () => {
    state.setState({ message: '', isError: false })
  }

  useLayoutEffect(() => {
    errorState = state
  }, [state])

  return (
    <ErrorContext.Provider value={state}>
      <ErrorModal
        message={state.message}
        isOpen={state.isError}
        onClose={handleClose}
      />
      {children}
    </ErrorContext.Provider>
  )
}
