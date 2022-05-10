import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

:focus {
  outline-offset: 8px;
}

body {
  min-width: ${({ theme }) => theme.breakpoint.mobileMin};
  color: ${({ theme }) => theme.color.primaryText};
  background-color: ${({ theme }) => theme.color.background};
  font-family: ${({ theme }) => theme.font.regular};
  overflow-y: scroll;
  font-size: 22px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}) {
        font-size: 18px;
    }
}

button {
  cursor: pointer;
}

ul, ol {
  list-style: none;
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
  color: currentColor;
}`