import { AbstractStorage } from 'core/abstract/AbstractStorage'

export class AuthStorage extends AbstractStorage {
  constructor() {
    super()
    this.refreshKey = 'IOAUHddjff'
  }

  getRefresh() {
    const refresh = this.get(this.refreshKey)
    return refresh
  }

  setRefresh(refreshToken) {
    const refresh = this.set(this.refreshKey, refreshToken)
    return refresh
  }

  removeRefresh() {
    const refresh = this.remove(this.refreshKey)
    return refresh
  }
}
