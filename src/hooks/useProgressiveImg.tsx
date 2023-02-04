import React, {useEffect, useState} from 'react'

// https://benhoneywill.com/progressive-image-loading-with-react-hooks/
const useProgressiveImg = (lowQualitySrc: string, highQualitySrc: string, isVisible: boolean) => {
  const [src, setSrc] = useState<string>(lowQualitySrc)

  useEffect(() => {
    if (isVisible) {
      setSrc(lowQualitySrc)
      const img: HTMLImageElement = new Image()
      img.src = highQualitySrc
      img.onload = () => {
        setSrc(highQualitySrc)
      }
    }
  }, [lowQualitySrc, highQualitySrc, isVisible])

  return {src, blur: src === lowQualitySrc}
}
export default useProgressiveImg
