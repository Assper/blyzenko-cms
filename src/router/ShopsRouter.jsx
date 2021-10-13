import { Shop } from 'pages/admin/shops/Shop'
import { ShopProducts } from 'pages/admin/shops/ShopProducts'
import { Shops } from 'pages/admin/shops/Shops'
import { ShopSettings } from 'pages/admin/shops/ShopSettings'
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { routes } from './routes'

const { base, shop, settings, products } = routes.admin.shops

export const ShopsRouter = () => {
  return (
    <Switch>
      <Route path={settings(':uuid')}>
        <ShopSettings />
      </Route>
      <Route path={products(':uuid')}>
        <ShopProducts />
      </Route>
      <Route path={shop(':uuid')}>
        <Shop />
      </Route>
      <Route path={base}>
        <Shops />
      </Route>
    </Switch>
  )
}
