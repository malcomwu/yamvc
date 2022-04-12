
/* Helpers */
const hasDoubleQuote = str => str.test(/'/)


export class Element {
  constructor(tagName = 'br', attributes = {}, content = [],
              indent = 2, level = 0) {
    this.name = 'element'
    this.tagName = tagName
    this.attributes = attributes 
    this.content = content
    this.indent = 2
    this.level = 0
  }

  toString() {
    const { tagName, attributes, content } = this
    let strs = []

    // Begin tag
    strs.push('<', tagName)
    const attrStr = '' + attributes
    if (attrStr) strs.push(' ', attrStr)
    strs.push('>')

    // Content
    if (content.length) {
      content.forEach(child => {
        if (child instanceof Element) {
          // Todo..
        } else if (false /* is component */) {
          // To be considered..
        } else {
          strs.push('' + child)
        }
      })

      // End tag
      str.push('</' + tagName + '>')
    }
    // else Void

    return strs.join('')
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
    let { value } = this
    let strs = []
    Object.keys(value).forEach(attrName => {
      let attrValue = value[attrName]
      if (hasDoubleQuote(attrValue)) {
        strs.push(attrName + "='" + attrValue + "'")
      } else {
        strs.push(attrName + '="' + attrValue + '"')
      }
    })
    return strs.join(' ')
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
