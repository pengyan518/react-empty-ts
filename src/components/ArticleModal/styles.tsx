import styled from 'styled-components'
import config from '../../config'

const {mobile, sm} = config.breakpoint

export const Box = styled.div`
  width: 100%;
  font-family: var(--font-georgia);
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.5em;
  padding-bottom: 16px;
  padding-top: 20px;
  img {
    display: block;
    width: 100%;
    height: auto;
    margin: 30px 0 50px;
    //border-radius: 8px;
  }
  p {
    line-height: 1.5em;
    margin: 0 0 1.3em;
    display: block;
    text-align: left;
  }
`
export const HeaderImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
  margin: 16px 0;
  //border-radius: 8px;
`
interface HeaderVideoType {
  controls?: any
  poster?: string
  width?: string
  controlsList?: string
}
export const HeaderVideo = styled.div<HeaderVideoType>`
  display: block;
  width: 100%;
  height: auto;
  margin: 16px 0;
  object-fit: cover;
`
export const DialogInner = styled.div`
  padding: 5vw 7vw 15vw;
  @media (max-width: ${sm}px) {
    padding: 35px 0 0;
  }
`
export const Wrapper = styled.div`
  height: 90vh;
  overflow-y: scroll;
  @media (max-width: ${sm}px) {
    padding-bottom: 100px;
    height: 100vh;
  }
`
export const ViewAs = styled.a`
  text-decoration: none;
`
export const PrevBtn = styled.a`
  left: -100px;
  top: 5vh;
  display: grid;
  align-items: center;
  justify-content: center;
  height: 70vh;
  width: 50px;
  z-index: 100;
  color: #fff;
  @media (max-width: ${sm}px) {
    display: none;
  }
  &.disabled {
    opacity: 0.3;
  }
  &:hover,
  &:focus {
    color: #fff !important;
  }
`
export const NextBtn = styled(PrevBtn)`
  right: -100px;
  left: auto !important;
`
export const Header = styled.div`
  //min-height: 500px;
  @media (min-width: ${sm + 1}px) {
    text-align: right;
  }
`
export const Title = styled.h2`
  //min-height: 500px;
  font-family: var(--font-georgia);
  font-size: 2rem;
  margin-top: 4rem;
  margin-bottom: 1rem;
  @media (min-width: ${sm + 1}px) {
  }
`
export const Close = styled.a`
  display: inline-block;
  right: -64px;
  top: 0;
  color: #fff;
  z-index: 102;
  @media (max-width: ${mobile}px) {
    right: 15px;
    top: 25px;
    color: #999 !important;
  }
`
