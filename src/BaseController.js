
export default class BaseController {
  constructor(parameters, b?) {
    this.name = 'base-controller'
    this.parameters = parameters
    this.b? = b?
  }

  toString() {
    return 'To be described..'
  }

  toJSON() {
    const { parameters } = this
    return { parameters }
  }
}
