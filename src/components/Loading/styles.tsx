import styled, {keyframes} from 'styled-components'

const rotate = keyframes`
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  `

export interface LoadingType {
  width?: any
  height?: any
  background?: any
  color?: any
}

// eslint-disable-next-line import/prefer-default-export
export const LoadingContainer = styled.div<LoadingType>`
  width: ${({width}) => width || '100%'};
  height: ${({height}) => height || '100vh'};
  left: 0;
  right: 0;
  z-index: 100;
  background: ${({background}) => background || 'transparent'};
  transition: opacity 0.5s ease-in-out;
  opacity: 1;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  .Main__Spinner {
    transition: opacity 0.3s ease-in-out;
    color: ${({color}) => color || 'var(--brand-curent)'};
    opacity: 1;
    animation: ${rotate} 0.65s linear infinite;
  }
`
