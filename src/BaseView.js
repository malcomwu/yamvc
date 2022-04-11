
export default class BaseView {
  constructor(a, b) {
    this.name = 'base-view'
    this.a = a  // ??
    this.b = b  // ??
  }

  toString() {
    return 'To be described..'
  }

  toJSON() {
    const { name } = this
    return { name }
  }
}
