import styled from "styled-components";
import { FOOTER_HEIGHT, HEADER_HEIGHT } from "../../assets/variables";

export const Header = styled.header`
  width: 100%;
  height: ${HEADER_HEIGHT}em;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.color.appBarBackground};
`

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.primary};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${({ theme }) => theme.color.primaryText};
`

export const Main = styled.main`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - ${HEADER_HEIGHT}em - ${FOOTER_HEIGHT}em);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Footer = styled.footer`
  width: 100%;
  height: ${FOOTER_HEIGHT}em;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.enlight};
`