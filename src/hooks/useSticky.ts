import {useEffect, useState, useRef, useCallback} from 'react'
import debounce from '../utils/debounce'
// import useDebounce from './useDebounce'

function useSticky() {
  const [isSticky, setSticky] = useState(false)
  // const [value, setValue] = useState<number>(0)
  const element = useRef(null)


  // const debouncedValue = useDebounce<number>(value, 500)

  const handleScroll = useCallback(() => {
    // @ts-ignore
    if (window.scrollY > element.current.getBoundingClientRect().bottom) {
      setSticky(true)
    } else {
      setSticky(false)
    }
    // setValue(value+1)
    // console.debug(value)
  }, [])

  // const debouncedValue = useDebounce<string>(value, 500)

  useEffect(() => {
    window.addEventListener('scroll', debounce(handleScroll, 20))
    return () => {
      window.removeEventListener('scroll', () => handleScroll)
    }
  }, [handleScroll])

  return {isSticky, element}
}

export default useSticky
