import { StatusCodes } from 'http-status-codes'

export class ProductApiService {
  constructor(apiService) {
    this.api = apiService
    this.baseUrl = `${this.api.config.api}/products`
  }

  async getById(productId) {
    const { data, status } = await this.api.get(`${this.baseUrl}/${productId}`)
    if (status < StatusCodes.BAD_REQUEST) {
      return this.api.returnSuccess(status, data.data)
    }
    return this.api.returnFailure(status, data.messages)
  }

  async getByStoreId(storeId) {
    const { data, status } = await this.api.get(this.baseUrl, {
      params: { storeId }
    })
    if (status < StatusCodes.BAD_REQUEST) {
      return this.api.returnSuccess(status, data.data)
    }
    return this.api.returnFailure(status, data.messages)
  }
}
