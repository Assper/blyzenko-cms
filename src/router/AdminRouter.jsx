import { Dashboard } from 'pages/admin/Dashboard'
import { Shops } from 'pages/admin/Shops'
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { routes } from './routes'

export const AdminRouter = () => {
  return (
    <Switch>
      <Route path={routes.admin.dashboard}>
        <Dashboard />
      </Route>
      <Route path={routes.admin.shops.base}>
        <Shops />
      </Route>
      <Route path={routes.admin.base}>
        <Redirect to={routes.admin.dashboard} />
      </Route>
    </Switch>
  )
}
