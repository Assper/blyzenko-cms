import { LinearProgress } from '@mui/material'
import React, { useEffect } from 'react'
import { useAuthService } from 'shared/hooks/ioc/useAuthService'
import { useAuth } from '../hooks/contexts/useAuth'
import { useRefreshReq } from '../hooks/requests/useRefreshReq'

export const AutoLogin = ({ children }) => {
  const authService = useAuthService()
  const refreshTokens = useRefreshReq()
  const auth = useAuth()

  useEffect(() => {
    const { isAutoLoginComlete, isLogedIn } = auth
    if (!isLogedIn && !isAutoLoginComlete && !refreshTokens.isLoading) {
      const refresh = authService.getRefresh()
      if (!refresh) {
        auth.setState({ isAutoLoginComlete: true })
        return
      }

      refreshTokens
        .mutateAsync({ refresh })
        .then(({ access, user }) =>
          authService.login({ user, refresh, access })
        )
        .catch(() => authService.logout())
    }
  }, [refreshTokens, auth, authService])

  if (!auth.isAutoLoginComlete) return <LinearProgress color="secondary" />
  return children
}
