import {getCookie} from '../utils/cookie'

export const detectParameter = () => {
  let parameter = window.location.search.substring(1)
  // console.debug(`first ${parameter}`)
  // tracking cookie
  // if the tuid parameter is already in the url, we don't need to append it
  if (parameter.indexOf('_tuid') < 0) {
    const trackingCookie = getCookie('__mktuuid')
    if (trackingCookie) {
      if (parameter !== '') {
        parameter += `&_tuid=${trackingCookie}`
      } else {
        parameter += `_tuid=${trackingCookie}`
      }
    }
  }
  // console.debug(`4 ${parameter}`)
  return parameter
}

export const useDetectParameter = () => {
  // retrieve the parameter part from the url minus the question mark
  const parameter = window.location.search.substring(1)
  const trackingCookie = getCookie('__mktuuid')
  // console.debug(`first ${parameter}`)
  // tracking cookie
  // if the tuid parameter is already in the url, we don't need to append it
  if (parameter !== '') {
    if (parameter.indexOf('_tuid') < 0) {
      if (trackingCookie) {
        return `?${parameter}&_tuid=${trackingCookie}`
      }
    }
    return `?${parameter}`
  }
  if (trackingCookie) {
    return `?_tuid=${trackingCookie}`
  }
  // console.debug(`4 ${parameter}`)
  return parameter
}
