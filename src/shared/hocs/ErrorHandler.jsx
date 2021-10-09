import { useContext, useEffect, useState } from 'react'
import { ErrorContext } from '../contexts/ErrorContext'

const getErrorMessage = (error) => {
  if (error?.response?.data) {
    const { messages } = error.response.data
    if (messages) {
      if (Array.isArray(messages) && messages.length) {
        return messages[0]
      }
      if (typeof messages === 'string') {
        return messages
      }
    }
  }
  return 'Невідома помилка'
}

export const ErrorHandler = ({ error, isError, children }) => {
  const errorContext = useContext(ErrorContext)
  const setContext = useState(errorContext)[1]

  useEffect(() => {
    const message = getErrorMessage(error)
    setContext((context) => {
      context.setState({ isError, message })
      return context
    })
  }, [isError, error, setContext])

  return children
}
