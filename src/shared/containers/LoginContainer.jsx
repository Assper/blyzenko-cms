import React from 'react'
import { Redirect } from 'react-router'
import { useAuthService } from 'shared/hooks/ioc/useAuthService'
import { ErrorHandler } from '../hocs/ErrorHandler'
import { useAuth } from '../hooks/contexts/useAuth'
import { useLoginReq } from '../hooks/requests/useLoginReq'
import { LoginForm } from '../widgets/LoginForm'

export const LoginContainer = () => {
  const authContext = useAuth()
  const login = useLoginReq()
  const auth = useAuthService()

  const handleLogin = async (creds) => {
    if (login.isLoading) return
    const result = await login.mutateAsync(creds)
    if (result.isSuccess) auth.login(result.data)
  }

  if (authContext.isLogedIn) return <Redirect to="/admin/dashboard" />
  return (
    <ErrorHandler isError={login.isError} error={login.error}>
      <LoginForm onLogin={handleLogin} />
    </ErrorHandler>
  )
}
