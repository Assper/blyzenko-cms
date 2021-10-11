import { Container } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'
import { Header } from 'shared/components/Header'
import { DashboardContainer } from 'shared/containers/DashboardContainer'
import { ShopsContainer } from 'shared/containers/ShopsContainer'

const Main = styled(Container)({
  padding: '0 !important',
  height: '80vh'
})

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
