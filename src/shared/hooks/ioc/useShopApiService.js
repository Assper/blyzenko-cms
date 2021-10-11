import { DI } from 'core/ioc/di'

export const useShopApiService = () => {
  return DI.Singleton.shopApiService()
}
