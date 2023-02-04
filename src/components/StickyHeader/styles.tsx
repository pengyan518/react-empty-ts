import styled from 'styled-components'
import { ListItemProps } from "../../types";

interface FigureProps {
  dataSrc: any
}
// eslint-disable-next-line import/prefer-default-export
export const StickyHeaderBox = styled.div`
  width: 100%;
  background-color:#fff;
  @media (min-width: 768px) {
    //min-height: 600px;
  }
`
export const ListUl = styled.ul<ListItemProps>``


