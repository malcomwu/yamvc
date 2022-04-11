
export default class BaseModel {
  constructor(data, b) {
    this.name = 'base-model'
    this.data = data
    this.b = b  // ??
  }

  toString() {
    return 'To be described..'
  }

  toJSON() {
    const { name, data } = this
    return { name, data }
  }
}
