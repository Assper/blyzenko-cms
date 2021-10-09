export class AbstractStorage {
  _serialize(data) {
    return typeof data === 'object' ? JSON.stringify(data) : data.toString()
  }

  get(key) {
    return localStorage.getItem(key)
  }

  has(key) {
    return !!this.get(key)
  }

  set(key, data) {
    const serialized = this._serialize(data)
    localStorage.setItem(key, serialized)
    return this.get(key)
  }

  remove(key) {
    const item = this.get(key)
    localStorage.removeItem(key)
    return item
  }
}
