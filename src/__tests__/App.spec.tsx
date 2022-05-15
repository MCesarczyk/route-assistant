import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from '../App';
import { standard } from '../theme';

test("App renders title", () => {
  render(
    <ThemeProvider theme={standard}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  );
  const linkElement = screen.getByText(/route assistant/i);
  expect(linkElement).toBeInTheDocument();
});
