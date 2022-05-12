import { StyledInput } from "./styled";

type inputProps = {
  value: string,
  setValue: Function,
  placeholder?: string | undefined
}

const Input = ({ value, setValue, placeholder }: inputProps) => (
  <StyledInput
    aria-label="input"
    data-testid="input"
    value={value}
    placeholder={placeholder}
    onChange={(e: { target: HTMLInputElement }) => setValue(e.target.value)}
    minLength={0}
  />
);

export default Input;