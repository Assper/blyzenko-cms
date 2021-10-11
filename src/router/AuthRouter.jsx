import { Login } from 'pages/auth/Login'
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { routes } from './routes'

export const AuthRouter = () => {
  return (
    <Switch>
      <Route path={routes.auth.login}>
        <Login />
      </Route>
      <Route path={routes.auth.base}>
        <Redirect to={routes.auth.login} />
      </Route>
    </Switch>
  )
}
