
export default class BaseController {
  constructor(properties, b) {
    this.name = 'base-controller'
    this.properties = parameters
    this.b = b  // ??
  }

  toString() {
    return 'To be described..'
  }

  toJSON() {
    const { name, properties } = this
    return { name, properties }
  }
}
