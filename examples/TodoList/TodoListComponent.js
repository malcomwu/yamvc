import element from 'yamvc/element'
import TodoListModel from './TodoListModel'
import TodoListView from './TodoListView'
import TodoListController from './TodoListController'

export default class TodoComponent extends BaseComponent {
  constructor(..) {
    super(..)
    this.name = 'todo-component'
  }

  fragment() {
    return element(
      'div',
      {theAttributes},
      [theContent]
    )
  }
}
