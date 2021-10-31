import { CacheKey } from 'core/enums/CacheKey'
import { useCallback } from 'react'
import { useQuery } from 'react-query'
import { useProductApiService } from '../ioc/useProductApiService'

export const useShopProductsReq = (storeId) => {
  const cacheKey = `${CacheKey.ShopProducts}-${storeId}`
  const product = useProductApiService()
  const callback = useCallback(
    () => product.getById(storeId),
    [product, storeId]
  )
  return useQuery(cacheKey, callback)
}
