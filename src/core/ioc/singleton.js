import { ApiService } from 'core/api/services/ApiService'
import { AuthApiService } from 'core/api/services/AuthApiService'
import { ProductApiService } from 'core/api/services/ProductService'
import { ShopApiService } from 'core/api/services/ShopApiService'
import { AuthService } from 'core/services/AuthService'
import { AuthStorage } from 'core/storages/AuthStorage'
import { Constant } from './constant'
import { Dynamic } from './dynamic'

const initInstance = (Class, deps) => {
  let instance = null
  return () => {
    if (!instance) {
      instance = new Class(...deps)
    }
    return instance
  }
}

export const Singleton = Object.freeze({
  authStorage: () => initInstance(AuthStorage, [])(),
  authService: () =>
    initInstance(AuthService, [
      Singleton.authStorage(),
      Dynamic.getAuthState
    ])(),
  apiService: () =>
    initInstance(ApiService, [Constant.config, Singleton.authService()])(),
  authApiService: () =>
    initInstance(AuthApiService, [Singleton.apiService()])(),
  shopApiService: () =>
    initInstance(ShopApiService, [Singleton.apiService()])(),
  productApiService: () =>
    initInstance(ProductApiService, [Singleton.apiService()])()
})
