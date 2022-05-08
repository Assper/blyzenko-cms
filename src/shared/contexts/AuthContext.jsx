import React, { createContext, useLayoutEffect, useState } from 'react'

export const initialAuthState = {
  isLogedIn: false,
  isAutoLoginComlete: false,
  user: null,
  access: '',
  refresh: ''
}

const defaultAuthValue = {
  ...initialAuthState,
  setState: () => {
    return
  }
}

let authState = { ...defaultAuthValue }
export const getAuthState = () => authState
export const AuthContext = createContext(defaultAuthValue)
AuthContext.displayName = 'AuthContext'

export const AuthProvider = ({ children }) => {
  const handleState = (data) => setState({ ...authState, ...data })
  const [state, setState] = useState({
    ...authState,
    setState: handleState
  })

  useLayoutEffect(() => {
    authState = state
  }, [state])

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>
}
