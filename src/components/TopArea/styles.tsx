import styled from 'styled-components'
import bg_sm from '../../assets/images/topArea__bg_sm.jpg'
import {LangProps} from '../../types'
import config from '../../config'

interface FigureProps {
  dataSrc: any
}
interface ContainerProps {
  dataMinHeight: number
}
// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div<ContainerProps>`
  width: 100%;
  background-color: #1c50a2;
  min-height: ${({dataMinHeight}) => `${dataMinHeight * 1.4}px`};
  position: relative;
  @media (min-width: 500px) and (max-width: 639px) {
    min-height: ${({dataMinHeight}) => `${dataMinHeight * 1.65}px`};
  }
  @media (min-width: 640px) and (max-width: 820px) {
    min-height: ${({dataMinHeight}) => `${dataMinHeight * 1.8}px`};
  }
  @media (min-width: 821px) and (max-width: 1024px) {
    min-height: ${({dataMinHeight}) => `${dataMinHeight * 1.9}px`};
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    min-height: ${({dataMinHeight}) => `${dataMinHeight * 1.9}px`};
  }
  @media (min-width: 1281px) and (max-width: 1536px) {
    min-height: ${({dataMinHeight}) => `${dataMinHeight * 2.05}px`};
  }
  @media (min-width: 1537px) and (max-width: 1599px) {
    min-height: ${({dataMinHeight}) => `${dataMinHeight * 2.1}px`};
  }
  @media (min-width: 1600px) and (max-width: 1999px) {
    min-height: ${({dataMinHeight}) => `${dataMinHeight * 2.3}px`};
  }
  @media (min-width: 2000px) {
    min-height: ${({dataMinHeight}) => `${dataMinHeight * 1.1}px`};
  }
  &::before {
    //min-height: 100vh;
    padding-bottom: 120%;

    @media (min-width: 768px) and (max-width: 1500px) {
      padding-bottom: 90%;
    }
    @media (min-width: 1501px) {
      padding-bottom: 95%;
    }
  }
`
export const ContentWrapper = styled.div``

export const Header = styled.div<LangProps>`
   br {
    display: none;
    @media (min-width: ${({langCode}) => `${config.cnLang.includes(langCode) ? '1600' : '1400'}`}px) {
      display: block;
    }
  }
`
export const Figure = styled.div<FigureProps>`
  width: 100%;
  height: 100%;
  background-color: #1c50a2;
  background-position: 50% 100%;
  background-size: 100% auto;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  &.progressive--not-loaded {
    background-image: url(${bg_sm});
  }
  &.progressive--is-loaded {
    background-image: ${({dataSrc}) => `url(${dataSrc})`};
  }
`
