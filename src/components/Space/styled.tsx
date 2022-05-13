import styled, { css } from "styled-components";

interface SpaceProps {
  align?: string,
  justify?: string,
  vertical?: string
}

export const Space = styled.div`
  display: flex;
  align-items: ${(props: SpaceProps) => props.align};
  justify-content: ${props => props.justify};

  ${({ vertical }) => vertical && css`
    flex-direction: column;
  `}
`