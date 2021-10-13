import React, { useCallback } from 'react'
import { IconButton, LinearProgress } from '@mui/material'
import { ErrorHandler } from '../hocs/ErrorHandler'
import { useHistory, useParams } from 'react-router'
import { Main } from 'shared/components/styled/Main'
import { Header } from 'shared/components/Header'
import { useShopReq } from 'shared/hooks/requests/useShopReq'
import { ArrowBack } from '@mui/icons-material'
import { styled } from '@mui/styles'

const BackIcon = styled(ArrowBack)({
  fontSize: '2rem'
})

const GoBackButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2)
}))

export const ShopContainer = ({ Slot }) => {
  const history = useHistory()
  const { uuid } = useParams()
  const shop = useShopReq(uuid)

  const handleGoBack = useCallback(() => history.goBack(), [history])

  if (shop.isLoading) return <LinearProgress color="secondary" />
  return (
    <ErrorHandler isError={shop.isError} error={shop.error}>
      <Header>
        <GoBackButton onClick={handleGoBack}>
          <BackIcon />
        </GoBackButton>
        Магазин №{shop.data.data.shopNumber}
      </Header>
      <Main>
        <Slot shop={shop.data.data} />
      </Main>
    </ErrorHandler>
  )
}
