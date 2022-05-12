import { render, fireEvent, screen } from '@testing-library/react'
import { unmountComponentAtNode } from 'react-dom';
import Input from '../components/Input';

let container: any = null;
let onInputChangeMock = jest.fn();

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  onInputChangeMock.mockClear();
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('Input should render properly', () => {
  render(<Input value="" setValue={onInputChangeMock} />);

  expect(screen.getByTestId("input")).toBeInTheDocument();
});

test('Input should display given placeholder', () => {
  render(<Input value="" placeholder="example" setValue={onInputChangeMock} />);

  expect(screen.getByTestId("input")).toHaveAttribute('placeholder', 'example');
});

test('Input should change value', () => {
  render(<Input value="" setValue={onInputChangeMock} />);

  fireEvent.change(screen.getByTestId("input"), { target: { value: "some text" } });
  expect(onInputChangeMock).toHaveBeenCalledTimes(1);
  expect(onInputChangeMock).toHaveBeenCalledWith("some text");
});

test('Input should be possible to clear', () => {
  render(<Input value="some text" setValue={onInputChangeMock} />);

  fireEvent.change(screen.getByTestId("input"), { target: { value: "" } });
  expect(onInputChangeMock).toHaveBeenCalledTimes(1);
  expect(onInputChangeMock).toHaveBeenCalledWith("");
});

test("Providing empty value shouldn't trigger any action", () => {
  render(<Input value="" setValue={onInputChangeMock} />);

  fireEvent.change(screen.getByTestId("input"), { target: { value: "" } });
  expect(onInputChangeMock).toHaveBeenCalledTimes(0);
});

test('Only changing value should trigger action', () => {
  render(<Input value="" setValue={onInputChangeMock} />);

  fireEvent.change(screen.getByTestId("input"), { target: { value: "" } });
  expect(onInputChangeMock).toHaveBeenCalledTimes(0);
});