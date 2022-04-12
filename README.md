# YaMVC 0.1.0
This is yet another model view controller (YaMVC).

It is a *draft* of the design blueprint of YaMVC, which is not implemented yet.

## Usage
**Install**<br>
For the beginners,
```sh
cd ~/Development
mkdir my_repo_name
cd my_repo_name
git init
npm init
npm install yamvc --save-dev  # not implemented yet
```

(Sketch)

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
export default class PoliceOfficView extends BaseView {
  constructor(points) {
    super(points)
    this.name = 'police-office-view'
  }
}
```

**Controller**
```js
import BaseController from 'yamvc/BaseController'
export default class TrafficController extends BaseController {
  constructor(properties) {
    super(properties)
    this.name = 'traffic-controller'
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
