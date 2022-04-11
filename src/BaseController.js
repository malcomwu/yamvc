
export default class BaseController {
  constructor(properties) {
    this.name = 'base-controller'
    this.properties = properties
  }

  toString() {
    return 'To be described..'
  }

  toJSON() {
    const { name, properties } = this
    return { name, properties }
  }
}
