import styled from "styled-components";

export const Header = styled.header`
  background-color: ${({ theme }) => theme.color.primary};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${({ theme }) => theme.color.primaryText};
`