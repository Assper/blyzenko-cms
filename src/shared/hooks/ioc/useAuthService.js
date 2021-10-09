import { DI } from 'core/ioc/di'

export const useAuthService = () => {
  return DI.Singleton.authService()
}
