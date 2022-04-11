
export default class BaseModel {
  constructor(data) {
    this.name = 'base-model'
    this.data = data
  }

  toString() {
    return 'To be described..'
  }

  toJSON() {
    const { name, data } = this
    return { name, data }
  }
}
