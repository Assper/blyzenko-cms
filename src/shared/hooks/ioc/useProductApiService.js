import { DI } from 'core/ioc/di'

export const useProductApiService = () => {
  return DI.Singleton.productApiService()
}
