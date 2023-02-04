import {useEffect, useRef, ReactNode} from 'react'

export interface NaviRef {
  classList: any
}

const useDisabled = ({current = 0, array = []}) => {
  const nextRef = useRef<NaviRef>(null)
  const prevRef = useRef<NaviRef>(null)
  useEffect(() => {
    if (prevRef && prevRef.current && current === 0) {
      prevRef.current.classList.add('disabled')
    } else if (prevRef && prevRef.current) prevRef.current.classList.remove('disabled')

    if (nextRef && nextRef.current && current === array.length - 1) {
      nextRef.current.classList.add('disabled')
    } else if (nextRef && nextRef.current) nextRef.current.classList.remove('disabled')
  }, [current, array.length, prevRef, nextRef])

  return [nextRef, prevRef]
}

export default useDisabled
