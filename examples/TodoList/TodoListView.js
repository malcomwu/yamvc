import BaseView from 'yamvc/BaseView'
import element from 'yamvc/element'

export default class TodoListView extends BaseView {
  constructor(points) {
    super(points)
    this.name = 'todo-list-view'
  }

  fragment() {
    return element(
      'div',
      {theAttributes},
      [theContent]
    )
  }
}
