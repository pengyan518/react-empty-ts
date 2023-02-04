import {useCallback, useMemo} from 'react'
import {useDetectParameter} from './useDetectParameter'
import useURLSearchParams from './useURLSearchParams'

// interface TargetTicketLinkProps {
//   city: string | null
// }
const useTargetTicketParam = () => {
  const city = useURLSearchParams()
  const group = useURLSearchParams('group')
  const param = useDetectParameter()
  return useMemo(() => {
    if (city) {
      return `https://www.shenyun.com/${city}${param}`
    }
    if (group) {
      return `https://www.shenyun.com/${group}${param}`
    }
    return `https://www.shenyun.com/tickets${param}`
  }, [city, group, param])
}

export default useTargetTicketParam
window.useTargetTicketParam = useTargetTicketParam