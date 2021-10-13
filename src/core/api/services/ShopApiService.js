import { StatusCodes } from 'http-status-codes'

export class ShopApiService {
  constructor(apiService) {
    this.api = apiService
    this.baseUrl = `${this.api.config.api}/stores`
  }

  async getAll() {
    const { data, status } = await this.api.get(this.baseUrl, {
      params: {
        skip: 0,
        limit: Number.MAX_SAFE_INTEGER
      }
    })
    if (status < StatusCodes.BAD_REQUEST) {
      return this.api.returnSuccess(status, data.data)
    }
    return this.api.returnFailure(status, data.messages)
  }

  async getById(uuid) {
    const { data, status } = await this.api.get(`${this.baseUrl}/${uuid}`)
    if (status < StatusCodes.BAD_REQUEST) {
      return this.api.returnSuccess(status, data.data)
    }
    return this.api.returnFailure(status, data.messages)
  }
}
