import {useCallback} from 'react'
import useTargetTicketParam from './useTargetTicketParam'

// interface TargetTicketLinkProps {
//   city: string | null
// }
const useTargetTicketLink = () => {
  // const city = useURLSearchParams()
  // const group = useURLSearchParams('group')
  // const param = useDetectParameter()
  const link = useTargetTicketParam()
  return useCallback(() => {
    window.open(link, '_blank')
  }, [link])
}

export default useTargetTicketLink
