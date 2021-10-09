import { Login } from 'pages/auth/Login'
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

export const AuthRouter = () => {
  return (
    <Switch>
      <Route path="/auth/login">
        <Login />
      </Route>
      <Route path="/auth">
        <Redirect to="/auth/login" />
      </Route>
    </Switch>
  )
}
