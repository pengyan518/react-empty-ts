import styled from 'styled-components'


// eslint-disable-next-line import/prefer-default-export
export const ImageWrapper = styled.div`
  overflow: hidden;
  img,
  >div,
  > a {
    transform: scale(1);
    transition: transform 0.35s ease-in-out;
    &:focus,
    &:hover {
      transform: scale(1.1);
    }
  }
`