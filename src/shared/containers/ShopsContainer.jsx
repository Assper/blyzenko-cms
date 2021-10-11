import React from 'react'
import { LinearProgress } from '@mui/material'
import { useAllShopsReq } from 'shared/hooks/requests/useAllShopsReq'
import { ShopsTable } from 'shared/widgets/ShopsTable'
import { ErrorHandler } from '../hocs/ErrorHandler'

export const ShopsContainer = () => {
  const shops = useAllShopsReq()

  if (shops.isLoading) return <LinearProgress color="secondary" />
  return (
    <ErrorHandler isError={shops.isError} error={shops.error}>
      <ShopsTable shops={shops.data.data} />
    </ErrorHandler>
  )
}
