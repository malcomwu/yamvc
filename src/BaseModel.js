
/*
   Todos: data binding
 */
export class Data {
  constructor(data, model) {
    this.name = 'data'

  }


  toString() {
    return ''
  }

  toJSON() {
    const { name } = this
    return { name }
  }
}

export default class BaseModel {
  constructor(data = {}) {
    this.name = 'base-model'
    this.data = data
  }

  // get data() { return this._data }
  // set data() { this._data = new Data(data, this) }

  // get(name) {

  // }

  // set(name) {

  // }

  toString() {
    return 'To be described..'
  }

  toJSON() {
    const { name, data } = this
    return { name, data }
  }
}
