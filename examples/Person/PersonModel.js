import BaseModel from 'yamvc/BaseModel'

export default class PersonModel extends BaseModel {
  constructor(data) {
    super(data)
    this.name = 'person-model'
  }
}
