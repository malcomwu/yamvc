
export default class BaseComponent {
  constructor(..) {
    this.name = 'base-component'
  }

  toString() {
    return 'To be described..'
  }

  toJSON() {
    const { name } = this
    return { name }
  }
}
