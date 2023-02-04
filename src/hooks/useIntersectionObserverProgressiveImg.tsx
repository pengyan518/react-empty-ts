import React, {useEffect, useRef, useState} from 'react'
import useIntersectionObserver from './useIntersectionObserver'
import useProgressiveImg from './useProgressiveImg'

const useIntersectionObserverProgressiveImg = (lowQualitySrc: string, highQualitySrc: string, freezeOnceVisible=true) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, {freezeOnceVisible})
  const isVisible = !!entry?.isIntersecting
  // const [visibleClass, setVisibleClass] = useState<string>('progressive--not-loaded')
  const {src, blur} = useProgressiveImg(lowQualitySrc, highQualitySrc, isVisible)



  // useEffect(() => {
  //   if (isVisible && !blur) setVisibleClass(visibleClassName)
  // }, [blur, isVisible, visibleClassName])

  return {src, ref, blur, isVisible}
}
export default useIntersectionObserverProgressiveImg
