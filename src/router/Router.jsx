import React from 'react'
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom'
import { AuthGuard } from 'shared/guards/AuthGuard'
import { AdminRouter } from './AdminRouter'
import { AuthRouter } from './AuthRouter'

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/auth">
          <AuthRouter />
        </Route>
        <Route path="/admin">
          <AuthGuard>
            <AdminRouter />
          </AuthGuard>
        </Route>
        <Route path="/">
          <Redirect to="/auth/login" />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
