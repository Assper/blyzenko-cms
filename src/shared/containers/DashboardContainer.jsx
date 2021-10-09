import { Container } from '@mui/material'
import React, { useCallback, useState } from 'react'
import { Redirect } from 'react-router'
import { useAuthService } from 'shared/hooks/ioc/useAuthService'
import { useLogoutReq } from 'shared/hooks/requests/useLogoutReq'
import { SideNav } from 'shared/widgets/SideNav'
import { TopNav } from 'shared/widgets/TopNav'
import { ErrorHandler } from '../hocs/ErrorHandler'
import { useAuth } from '../hooks/contexts/useAuth'

export const DashboardContainer = ({ children }) => {
  const { refresh, isLogedIn } = useAuth()
  const auth = useAuthService()
  const logoutReq = useLogoutReq()
  const [isMenuOpen, setMenuOpen] = useState()

  const handleLogout = useCallback(async () => {
    await logoutReq.mutateAsync(refresh)
    auth.logout()
  }, [auth, logoutReq, refresh])

  const handleMenuToggle = useCallback(
    (isMenuOpen) => setMenuOpen(isMenuOpen),
    [setMenuOpen]
  )

  const handleMenuClose = useCallback(() => setMenuOpen(false), [setMenuOpen])

  if (!isLogedIn) return <Redirect to="/auth/login" />
  return (
    <ErrorHandler isError={false} error="">
      <TopNav
        onLogout={handleLogout}
        onMenuToggle={handleMenuToggle}
        isMenuOpen={isMenuOpen}
      />
      <SideNav
        isOpen={isMenuOpen}
        onClose={handleMenuClose}
        onLogout={handleLogout}
      />
      <Container>{children}</Container>
    </ErrorHandler>
  )
}
