
/* Adapted from Underscore.js
   https://underscorejs.org/docs/underscore-esm.html */
export const debounce = (func, wait) => {
  let timeout, previous, args, result, context

  const later = () => {
    var passed = now() - previous
    if (wait > passed) {
      timeout = setTimeout(later, wait - passed)
    } else {
      timeout = null
      if (!timeout) args = context = null
    }
  }

  const debounced = restArguments(_args => {
    context = this
    args = _args
    previous = now()
    if (!timeout) {
      timeout = setTimeout(later, wait)
    }
    return result
  })

  debounced.cancel = () => {
    clearTimeout(timeout)
    timeout = args = context = null
  }

  return debounced
}
