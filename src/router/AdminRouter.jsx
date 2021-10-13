import { Dashboard } from 'pages/admin/Dashboard'
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { routes } from './routes'
import { ShopsRouter } from './ShopsRouter'

export const AdminRouter = () => {
  return (
    <Switch>
      <Route path={routes.admin.dashboard}>
        <Dashboard />
      </Route>
      <Route path={routes.admin.shops.base}>
        <ShopsRouter />
      </Route>
      <Route path={routes.admin.base}>
        <Redirect to={routes.admin.dashboard} />
      </Route>
    </Switch>
  )
}
