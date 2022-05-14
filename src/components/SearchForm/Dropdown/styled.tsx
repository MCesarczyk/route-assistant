import styled, { css } from "styled-components";

interface ListProps {
  visible?: string
}

export const DropdownWrapper = styled.div`
  position: relative;
  z-index: 500;
`

export const DropdownList = styled.ul`
  font-size: 1rem;
  line-height: 1.57;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 600;
  overflow-y: auto;
  max-height: 10rem;
  width: 100%;
  color: ${({theme}) => theme.color.oppositeText};
  background-color: ${({theme}) => theme.color.oppositeBackground};
  display: none;

  ${({ visible }: ListProps) => visible && css`
    display: block;
  `}
`

export const ListItem = styled.li`
  cursor: pointer;

  &:hover {
    background-color: ${({theme}) => theme.color.selected}
  }
`