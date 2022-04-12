import BaseModel from 'yamvc/BaseModel'

var data = {
  firstName: 'John',
  lastName: 'Smith',
  get name() {
    return this.firstName + ' ' + this.lastName
  },
  set name(n) {
    let names = n.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
  },
  sex: 'male',  // or gender
  age: 35,
  nationality: 'USA'
}

export default class PersonModel extends BaseModel {
  constructor(data) {
    super(data)
    this.name = 'person-model'
  }
}
