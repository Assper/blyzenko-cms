import axios from 'axios'
import { StatusCodes } from 'http-status-codes'

export class ApiService {
  constructor(config, authService) {
    this.config = config
    this.authService = authService
    this.api = axios.create()

    this.api.interceptors.request.use(
      this._accessTokenInterceptor.bind(this),
      (error) => {
        throw error
      }
    )

    this.api.interceptors.response.use(
      (response) => response,
      this._retryInterceptor.bind(this)
    )
  }

  _accessTokenInterceptor(config) {
    const { access } = this.authService.getAuthTokens()
    config.headers = {
      Authorization: `Bearer ${access}`,
      Accept: 'application/json'
    }
    return config
  }

  _isShouldRefresh(req, { status, data }) {
    if (req.url.includes('auth/revoke') || !req._retry) return false
    if (status === StatusCodes.UNAUTHORIZED && data) {
      if (Array.isArray(data.messages)) {
        return !data.messages.includes('Invalid credentials')
      }
      return data.messages !== 'Invalid credentials'
    }
    return false
  }

  async _retryInterceptor(error) {
    const originalRequest = error.config
    if (error.response) {
      if (this._isShouldRefresh(originalRequest, error.response)) {
        originalRequest._retry = true
        const endpoint = `${this.config.api}/auth/refresh`
        const { refresh } = this.authService.getAuthTokens()

        const { status, data } = await this.api.post(endpoint, {
          refreshToken: refresh
        })

        if (status === StatusCodes.OK) {
          this.authService.setAuthTokens(data.data.access, refresh)
          originalRequest.headers.Authorization = `Bearer ${data.data.access}`
          return await this.api(originalRequest)
        }

        this.authService.logout()
      }
    }
    throw error
  }

  returnSuccess(status, data) {
    return {
      isSuccess: true,
      data,
      status
    }
  }

  returnFailure(status, errors) {
    return {
      isSuccess: false,
      errors,
      status
    }
  }

  get(...args) {
    return this.api.get(...args)
  }

  post(...args) {
    return this.api.post(...args)
  }

  put(...args) {
    return this.api.put(...args)
  }

  patch(...args) {
    return this.api.patch(...args)
  }

  delete(...args) {
    return this.api.delete(...args)
  }
}
