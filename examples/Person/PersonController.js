import BaseController from 'yamvc/BaseController'
import PersonModel from './PersonModel'
import PersonView from './PersonView'
import element from './element'

var model = PersonModel({
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
})

var view = PersonView({
  template: element('div', [
    element('form', [
      element('label', { for: 'fname' }, 'First name:'), element('br'),
      element('input', { type: 'text', id: 'fname', name: 'fname', value: ?? }),
      element('br'),
      element('label', { for: 'lname' }, 'Last name:'), element('br'),
      element('input', { type: 'text', id: 'lname', name: 'lname', value: ?? }),
      element('br'),
      element('input', { type: 'submit', value: 'Submit' })
    ]),
    element('p', 'Adapted from W3School: https://www.w3schools.com/html/tryit.asp?filename=tryhtml_form_submit')
  ])
})


export default class PersonController extends BaseController {
  constructor(properties) {
    super(properties)
    this.name = 'person-controller'
  }
}
