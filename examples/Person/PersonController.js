import BaseController from 'yamvc/BaseController'

export default class PersonController extends BaseController {
  constructor(properties) {
    super(properties)
    this.name = 'person-controller'
  }
}
