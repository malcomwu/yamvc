import BaseView from 'yamvc/BaseView'

export default class PersonView extends BaseView {
  constructor(points) {
    super(points)
    this.name = 'person-view'
  }
}
