import styled from 'styled-components'
// import bg from '../../assets/images/wisy-video.jpg'

interface FigureProps {
  dataSrc: any
}
// eslint-disable-next-line import/prefer-default-export
export const Figure = styled.div<FigureProps>`
  //width: 100%;
  background-image: ${({dataSrc}) => `url(${dataSrc})`};
  background-position: 50%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  //min-height: 300px;
  @media(min-width:768px) {
  }
  &::before {
    padding-bottom: 59%;
  }
`
export const Label = styled.div`
  > br {
    display: none;
    @media (min-width: 1400px) {
      display: block;
    }
  }
`
