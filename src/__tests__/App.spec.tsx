import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import App from '../App';
import { standard } from '../theme';

test("App renders title", () => {
  render(
    <ThemeProvider theme={standard}>
      <App />
    </ThemeProvider>
  );
  const linkElement = screen.getByText(/route assistant/i);
  expect(linkElement).toBeInTheDocument();
});
