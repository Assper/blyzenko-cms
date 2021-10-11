import React from 'react'
import { Redirect } from 'react-router-dom'
import { routes } from 'router/routes'
import { useAuth } from '../hooks/contexts/useAuth'

export const AuthGuard = ({ children }) => {
  const { isLogedIn } = useAuth()
  return isLogedIn ? children : <Redirect to={routes.auth.login} />
}
