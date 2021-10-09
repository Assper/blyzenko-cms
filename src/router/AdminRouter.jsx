import { Dashboard } from 'pages/admin/Dashboard'
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

export const AdminRouter = () => {
  return (
    <Switch>
      <Route path="/admin/dashboard">
        <Dashboard />
      </Route>
      <Route path="/admin">
        <Redirect to="/admin/dashboard" />
      </Route>
    </Switch>
  )
}
