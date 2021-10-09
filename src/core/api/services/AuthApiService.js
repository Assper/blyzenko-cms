import { StatusCodes } from 'http-status-codes'

export class AuthApiService {
  constructor(apiService) {
    this.api = apiService
    this.baseUrl = this.api.config.api
  }

  /**
   * @param creds
   * @returns {Object}
   * @type {({ phone: string, password: string }) => Object}
   */
  async loginByPassword(creds) {
    const { data, status } = await this.api.post(
      `${this.baseUrl}/employees/login`,
      creds
    )
    if (status < StatusCodes.BAD_REQUEST) {
      return this.api.returnSuccess(status, data.data)
    }
    return this.api.returnFailure(status, data.messages)
  }

  async refreshTokens(refreshToken) {
    const { data, status } = await this.api.post(
      `${this.baseUrl}/auth/refresh`,
      { refreshToken }
    )
    if (status < StatusCodes.BAD_REQUEST) {
      return this.api.returnSuccess(status, data.data)
    }
    return this.api.returnFailure(status, data.messages)
  }

  async revokeTokens(refreshToken) {
    const { data, status } = await this.api.post(
      `${this.baseUrl}/auth/revoke`,
      { refreshToken }
    )
    if (status < StatusCodes.BAD_REQUEST) {
      return this.api.returnSuccess(status, data.data)
    }
    return this.api.returnFailure(status, data.messages)
  }
}
