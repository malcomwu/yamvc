# YaMVC 0.1.0 (Draft)
This is yet another model view controller (YaMVC).

## Usage
**Model**
```js
import BaseModel from 'yamvc/BaseModel'
export default class PersonModel extends BaseModel {
  constructor(?, ?) {
    super(?, ?)
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
