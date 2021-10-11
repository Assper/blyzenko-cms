import React from 'react'
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom'
import { AuthGuard } from 'shared/guards/AuthGuard'
import { AdminRouter } from './AdminRouter'
import { AuthRouter } from './AuthRouter'
import { routes } from './routes'

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={routes.auth.base}>
          <AuthRouter />
        </Route>
        <Route path={routes.admin.base}>
          <AuthGuard>
            <AdminRouter />
          </AuthGuard>
        </Route>
        <Route path="/">
          <Redirect to={routes.auth.login} />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
