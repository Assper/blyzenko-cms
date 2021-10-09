import { DI } from 'core/ioc/di'

export const useAuthApiService = () => {
  return DI.Singleton.authApiService()
}
