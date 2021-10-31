import React, { useCallback } from 'react'
import { LinearProgress } from '@mui/material'
import { ErrorHandler } from '../hocs/ErrorHandler'
import { useHistory, useParams } from 'react-router'
import { Main } from 'shared/components/styled/Main'
import { useShopReq } from 'shared/hooks/requests/useShopReq'
import { NavigatedHeader } from 'shared/components/NavigatedHeader'

export const ShopContainer = ({ Slot }) => {
  const history = useHistory()
  const { uuid } = useParams()
  const shop = useShopReq(uuid)

  const handleGoBack = useCallback(() => history.goBack(), [history])

  if (shop.isLoading) return <LinearProgress color="secondary" />
  return (
    <ErrorHandler isError={shop.isError} error={shop.error}>
      <NavigatedHeader onIconClick={handleGoBack}>
        Магазин №{shop.data.data.shopNumber}
      </NavigatedHeader>
      <Main>
        <Slot shop={shop.data.data} />
      </Main>
    </ErrorHandler>
  )
}
