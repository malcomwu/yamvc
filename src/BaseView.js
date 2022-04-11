
export default class BaseView {
  constructor(points) {
    this.name = 'base-view'
    this.points = points
  }

  toString() {
    return 'To be described..'
  }

  toJSON() {
    const { name, points } = this
    return { name, points }
  }
}
