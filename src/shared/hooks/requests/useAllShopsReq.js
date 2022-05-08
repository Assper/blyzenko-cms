import { CacheKey } from 'core/enums/CacheKey'
import { useQuery } from 'react-query'
import { useShopApiService } from '../ioc/useShopApiService'

export const useAllShopsReq = () => {
  const shop = useShopApiService()
  return useQuery(CacheKey.AllShops, shop.getAll)
}
