import styled, { css } from "styled-components";

type StyledButtonProps = {
  primary?: string
}

export const StyledButton = styled.button`
  color: #525252;
  background-color: #fff;
  padding: 0.375rem 0.75rem;

  ${({ primary }: StyledButtonProps) => primary && css`
  color: #fff;
  background-color: #525252;
  `}
`