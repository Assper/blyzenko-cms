import React from 'react'
import { ErrorHandler } from '../hocs/ErrorHandler'

export const ProductsContainer = ({ shop }) => {
  return (
    <ErrorHandler isError={false} error={''}>
      Продукти
    </ErrorHandler>
  )
}
