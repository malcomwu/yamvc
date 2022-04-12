import BaseController from 'yamvc/BaseController'

export default class TrafficController extends BaseController {
  constructor(properties) {
    super(properties)
    this.name = 'traffic-controller'
  }
}
