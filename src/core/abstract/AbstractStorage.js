export class AbstractStorage {
  _serialize(data) {
    return typeof data === 'object' ? JSON.stringify(data) : data.toString()
  }

  _deserialize(data) {
    try {
      return JSON.parse(data)
    } catch (e) {
      return data
    }
  }

  get(key) {
    const value = localStorage.getItem(key)
    return this._deserialize(value)
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
