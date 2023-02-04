import React, {ReactNode} from 'react'
import {ImageWrapper} from './styles'

// interface FancyImageHoverProps {
//   children: ReactNode
//   props?: any
// }
interface FancyImageHoverProps {
  className?: string;
  children: ReactNode;
}
const FancyImageHover = (
  props: FancyImageHoverProps,
) => {
  return <ImageWrapper {...props}>{props.children}</ImageWrapper>
}

export default FancyImageHover
