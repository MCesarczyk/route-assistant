import { unmountComponentAtNode } from 'react-dom';
import { render, act, fireEvent, screen } from '@testing-library/react';
import Navigation from '../components/Navigation';
import { ThemeProvider } from 'styled-components';
import { standard } from '../theme';

let container: any = null;
let onPageSwitchMock = jest.fn();

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  onPageSwitchMock.mockClear();
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

const setup = (current: number, total: number) => render(
  <ThemeProvider theme={standard}>
    <Navigation page={current} setPage={onPageSwitchMock} total={total} />
  </ThemeProvider>,
  container);

test('navigation should render properly with buttons', () => {
  setup(1, 10);

  expect(screen.getByText(/back/i)).toBeInTheDocument();
  expect(screen.getByText(/next/i)).toBeInTheDocument();
});

test('next button should increase page number', () => {
  act(() => {
    setup(5, 10);
  });

  fireEvent.click(screen.getByText(/next/i));
  expect(onPageSwitchMock).toHaveBeenCalledTimes(1);
  expect(onPageSwitchMock).toHaveBeenCalledWith(6);
});

test('back button should decrease page number', () => {
  act(() => {
    setup(5, 10);
  });

  fireEvent.click(screen.getByText(/back/i));
  expect(onPageSwitchMock).toHaveBeenCalledTimes(1);
  expect(onPageSwitchMock).toHaveBeenCalledWith(4);
});

test('next button is inactive on last page', () => {
  act(() => {
    setup(10, 10);
  });

  fireEvent.click(screen.getByText(/next/i));
  expect(onPageSwitchMock).toHaveBeenCalledTimes(0);
});

test('back button is inactive on first page', () => {
  act(() => {
    setup(1, 10);
  });

  fireEvent.click(screen.getByText(/back/i));
  expect(onPageSwitchMock).toHaveBeenCalledTimes(0);
});
