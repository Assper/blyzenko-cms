import React from 'react'
import { DashboardContainer } from 'shared/containers/DashboardContainer'
import { ShopContainer } from 'shared/containers/ShopContainer'
import { ShopInfo } from 'shared/widgets/ShopInfo'

export const Shop = () => {
  return (
    <DashboardContainer>
      <ShopContainer Slot={ShopInfo} />
    </DashboardContainer>
  )
}
