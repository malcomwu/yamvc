# YaMVC 0.1.0 (Draft)
This is yet another model view controller (YaMVC).

## Usage
**Model**
```js
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
```

**View**
```js
import BaseView from 'yamvc/BaseView'
export default class TheNameView extends BaseView {
  constructor(points) {
    super(points)
    this.name = 'the-name-view'
  }
}
```

**Controller**
```js
import BaseController from 'yamvc/BaseController'
export default class TheNameController extends BaseController {
  constructor(properties) {
    super(properties)
    this.name = 'the-name-controller'
  }
}
```

## Development
**Install**
```sh
git clone https://github.com/malcomwu/yamvc.git
```

## Contributions
Please raise issues or send a pull request.
