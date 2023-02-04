import React, {CSSProperties, ReactNode} from 'react'
import useImageOnLoad from '../../hooks/useImageOnLoad'

export type TimelineProps = {
  children?: ReactNode
  Thumb?: string
  ThumbSm?: string
  ratioClassName: string
  isVisible: boolean
}

export default function LoadImage({ThumbSm, Thumb, ratioClassName, isVisible}: TimelineProps) {
  const {handleImageOnLoad, css} = useImageOnLoad()
  // const dimensions = ratio.split(':')
  // const width = dimensions[0]
  // const height = dimensions[1]

  return (
    <div className={`relative ${ratioClassName}`}>
      {/* Small image load fast */}
      <img className="absolute w-full h-full top-0 left-0" style={{...(css.thumbnail as CSSProperties)}} src={ThumbSm} alt="thumbnail" />
      {/* Full size image */}
      {isVisible && (
        <img
          className="absolute w-full h-full top-0 left-0 block"
          onLoad={handleImageOnLoad}
          style={{...(css.fullSize as CSSProperties)}}
          src={Thumb}
          alt="fullImage"
        />
      )}
    </div>
  )
}
