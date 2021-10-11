import { CacheKey } from 'core/enums/CacheKey'
import { useCallback } from 'react'
import { useQuery } from 'react-query'
import { useShopApiService } from '../ioc/useShopApiService'

export const useAllShopsReq = () => {
  const shop = useShopApiService()
  const callback = useCallback(() => shop.getAll(), [shop])
  return useQuery(CacheKey.AllShops, callback)
}
