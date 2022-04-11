
export default class BaseView {
  constructor(points, b) {
    this.name = 'base-view'
    this.points = points
    this.b = b  // ??
  }

  toString() {
    return 'To be described..'
  }

  toJSON() {
    const { name, points } = this
    return { name, points }
  }
}
