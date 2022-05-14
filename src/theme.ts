import { DefaultTheme } from "styled-components";

export const standard: DefaultTheme = {
  color: {
    primary: '#282c34',
    primaryText: '#FFF',
    secondary: '#B6722F',
    secondaryText: '#CF9F68',
    background: '#383434',
    oppositeBackground: '#fafafa',
    oppositeText: '#282c34',
    selected: '#3FD5BB',
    appBarBackground: 'rgba(182, 114, 47, 0.8)',
    selectButtonBackground: 'rgba(255, 255, 255, 0.06)',
    selectDropdownBackground: '#403B37',
    enlight: 'rgba(255,255,255,0.2)'
  },
  breakpoint: {
    mobileMin: '374px',
    mobileMax: '767px',
    tabletMax: '1439px',
    desktopMax: '2400px'
  },
  font: {
    regular: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    headings: "'Poppins', sans-serif"
  },
  fontWeight: {
    regular: 400,
    semiBold: 600,
    bold: 700
  }
}