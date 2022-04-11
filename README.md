# YaMVC 0.1.0 (Draft)
This is yet another model view controller (YaMVC).

## Usage
**Model**
```js
import BaseModel from 'yamvc/BaseModel'

var data = {
  firstName: 'John',
  lastName: 'Smith',
  name: {
    get() {
      return this.firstName + ' ' + this.lastName
    },
    set(name) {
      let names = name.split(' ')
      this.firstName = names[0]
      this.lastName = names[1]
    }
  },
  sex: 'male',
  age: 35,
  nationality: 'USA'
}

export default class PersonModel extends BaseModel {
  constructor(data, ?) {
    super(data, ?)
    this.name = 'person-model'
  }
}
```

**View**
```js
import BaseView from 'yamvc/BaseView'
export default class ??View extends BaseView {
  constructor(?, ?) {
    super(?, ?)
    this.name = '??-view'
  }
}
```

**Controller**
```js
import BaseController from 'yamvc/BaseController'
export default class ??Controller extends BaseController {
  constructor(parameters, ?) {
    super(parameters, ?)
    this.name = '??-controller'
  }
}
```

## Development
```sh
git clone 'https://github.com/malcomwu/yamvc.git'
```

## Contributions
Please raise issues or send a pull request.
