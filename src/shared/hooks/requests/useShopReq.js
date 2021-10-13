import { CacheKey } from 'core/enums/CacheKey'
import { useCallback } from 'react'
import { useQuery } from 'react-query'
import { useShopApiService } from '../ioc/useShopApiService'

export const useShopReq = (uuid) => {
  const cacheKey = `${CacheKey.Shop}-${uuid}`
  const shop = useShopApiService()
  const callback = useCallback(() => shop.getById(uuid), [shop, uuid])
  return useQuery(cacheKey, callback)
}
