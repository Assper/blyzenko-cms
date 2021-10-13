import React from 'react'
import { DashboardContainer } from 'shared/containers/DashboardContainer'
import { ProductsContainer } from 'shared/containers/ProductsContainer'
import { ShopContainer } from 'shared/containers/ShopContainer'

export const ShopProducts = () => {
  return (
    <DashboardContainer>
      <ShopContainer Slot={ProductsContainer} />
    </DashboardContainer>
  )
}
