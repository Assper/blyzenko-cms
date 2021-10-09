import React from 'react'
import { Redirect } from 'react-router-dom'
import { useAuth } from '../hooks/contexts/useAuth'

export const AuthGuard = ({ children }) => {
  const { isLogedIn } = useAuth()
  return isLogedIn ? children : <Redirect to="/auth/login" />
}
