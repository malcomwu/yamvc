
export class Element {
  constructor(tagName, attributes, content) {
    this.name = 'element'
    this.tagName = tagName
    this.attributes = attributes 
    this.content = content 
  }

  toString() {
    // To be implemented..
  }

  toJSON() {
    const { name, tagName, attributes, content }
    return { name, tagName, attributes, content }
  }
}

export class Attributes {
  constructor(value) {
    this.name = 'attributes'
    this.value = value 
  }

  toString() {
    // To be implemented..
  }

  toJSON() {
    const { name, value } = this
    return { name, value }
  }
}

export default function element(name, attributes, content) {
  return {
    name, attributes, content 
  }
}
