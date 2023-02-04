import styled from 'styled-components'
import { ListItemProps } from "../../types";

interface FigureProps {
  dataSrc: any
}
// eslint-disable-next-line import/prefer-default-export
export const Figure = styled.div<FigureProps>`
  width: 100%;
  background-image: ${({dataSrc}) => `url(${dataSrc})`};
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 300px;
  @media (min-width: 768px) {
    //min-height: 600px;
  }
`
export const ListUl = styled.ul<ListItemProps>``

export const ListItem = styled.li<ListItemProps>`
  opacity: 0;
  transform: translateX(180px);
  //transition: transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1), opacity 0.5s ease-out;
  transition: transform 0.5s cubic-bezier(0.29, 0.78, 0.4, 1.01), opacity 0.5s ease-out;
  will-change: transform, opacity;

  &.animate-in {
    opacity: 1;
    transform: translateX(0px);
  }

  &::before {
    position: absolute;
    left: 0;
    top: 0.8rem;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #000;
  }
`
