import BaseComponent from './BaseComponent'

/* Helpers */
const spaces = num => new Array(num + 1).join(' ')
const hasDoubleQuote = str => str.test(/'/)


export class Element {
  constructor(tagName = 'br', attributes = {}, content = [],
              indent = 2, level = 0) {
    this.name = 'element'
    this.tagName = tagName
    this.attributes = attributes 
    this.content = content
    this.indent = indent
    this.level = level
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
        } else if (child instanceof BaseComponent) {
          // Todo..
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

/**
 * Usage
 * element(tagName'', attributes{}, content[]|''|..!{})
 * element(tagName'', attributes{})  // void
 * element(tagName'', content[]|''|..!{})
 * element(tagName'')  // '<tag-name>' (void)
 * element()  // '<br>' (void)
 **/
export default function element(tagName, attributes, content) {
  if (typeof content === 'undefined') {
    if (typeof attributes === 'undefined') {
      attributes = {}
    } else if (Array.isArray(attributes)) {
      content = attributes
      attributes = {}
    } else if (typeof attributes !== 'object') {
      content = [attributes]
      attributes = {}
    } else {
      content = []
    }
  } else if (!Array.isArray(content)) {
    content = [content]
  }

  return new Element(tagName, attributes, content)
}
