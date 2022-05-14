import { unmountComponentAtNode } from 'react-dom';
import { render, act, fireEvent, screen } from '@testing-library/react';
import Dropdown from '../components/SearchForm/Dropdown';
import { ThemeProvider } from 'styled-components';
import { standard } from '../theme';

let container: any = null;
let onItemClickMock = jest.fn();

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  onItemClickMock.mockClear();
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

const mock = [
  {
    id: '1',
    title: 'London'
  },
  {
    id: '2',
    title: 'Los Angeles'
  },
  {
    id: '3',
    title: 'Lonsdale'
  }
];

test('dropdown should be hidden initially', () => {
  render(
    <ThemeProvider theme={standard}>
      <Dropdown
        visible={false}
        onItemChange={() => { }}
        setVisible={() => { }}
        items={mock}
      />
    </ThemeProvider>,
    container
  );

  expect(screen.getByTestId('dropdown')).toHaveStyle('display: none');
});

test('dropdown should be shown when parameter visible is true', () => {
  render(
    <ThemeProvider theme={standard}>
      <Dropdown
        visible={true}
        onItemChange={() => { }}
        setVisible={() => { }}
        items={mock}
      />
    </ThemeProvider>,
    container
  );

  expect(screen.getByTestId('dropdown')).toHaveStyle('display: block');
});

test('dropdown should render mocked data', () => {
  render(
    <ThemeProvider theme={standard}>
      <Dropdown
        visible={true}
        onItemChange={() => { }}
        setVisible={() => { }}
        items={mock}
      />
    </ThemeProvider>,
    container
  );

  expect(screen.getByText(/London/)).toBeInTheDocument();
  expect(screen.getByText(/Los Angeles/)).toBeInTheDocument();
  expect(screen.getByText(/Lonsdale/)).toBeInTheDocument();
});

test('dropdown should pass chosen option id', () => {
  act(() => {
    render(
      <ThemeProvider theme={standard}>
        <Dropdown
          visible={true}
          onItemChange={onItemClickMock}
          setVisible={() => { }}
          items={mock}
        />
      </ThemeProvider>,
      container
    );
  });

  const listItem = screen.getAllByRole('listitem');
  fireEvent.click(listItem[2]);
  expect(onItemClickMock).toHaveBeenCalledTimes(1);
  expect(onItemClickMock).toHaveBeenCalledWith("3");
});