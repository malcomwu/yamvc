
export default class BaseComponent {
  constructor(properties /* ?.. */) {
    this.name = 'base-component'
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
