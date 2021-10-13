import React from 'react'
import { DashboardContainer } from 'shared/containers/DashboardContainer'
import { ShopContainer } from 'shared/containers/ShopContainer'
import { ShopSettings as ShopSettingsWidget } from 'shared/widgets/ShopSettings'

export const ShopSettings = () => {
  return (
    <DashboardContainer>
      <ShopContainer Slot={ShopSettingsWidget} />
    </DashboardContainer>
  )
}
