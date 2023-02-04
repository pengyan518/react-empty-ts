/**
 * Debounce
 *
 * @param {Function} callback - The callback function
 * @param {Number} delay - The delay number value
 *
 * @returns {Function} - The callback function wrapped in `setTimeout` function
 */

function debounce(func: any, wait?: number, immediate?: boolean) {
  let timeout: any
  return function () {
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this
    // eslint-disable-next-line prefer-rest-params
    const args = arguments
    const later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

export default debounce
