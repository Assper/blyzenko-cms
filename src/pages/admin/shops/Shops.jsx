import React from 'react'
import { Header } from 'shared/components/Header'
import { Main } from 'shared/components/styled/Main'
import { DashboardContainer } from 'shared/containers/DashboardContainer'
import { ShopsContainer } from 'shared/containers/ShopsContainer'

export const Shops = () => {
  return (
    <DashboardContainer>
      <Header>Магазини</Header>
      <Main>
        <ShopsContainer />
      </Main>
    </DashboardContainer>
  )
}
