import styled from "styled-components";

export const NavButton = styled.button`
  background-color: ${({ theme }) => theme.color.secondary};
  padding: 0.5rem 0.75rem;
  margin: 0 0.5rem;
  border: transparent;
  border-radius: 0.75rem;

  &:hover {
    filter: brightness(1.2);
  }

  &:disabled {
    background-color: ${({ theme }) => theme.color.background};
    cursor: not-allowed;

    &:hover {
      filter: unset;
    }
  }
`