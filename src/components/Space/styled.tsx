import styled, { css } from "styled-components";

interface SpaceProps {
  width?: string,
  align?: string,
  justify?: string,
  vertical?: boolean
}

export const Space = styled.div`
  display: flex;
  width: ${(props: SpaceProps) => props.width}
  align-items: ${props => props.align};
  justify-content: ${props => props.justify};

  ${({ vertical }) => vertical && css`
    flex-direction: column;
  `}
`