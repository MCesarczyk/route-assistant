import { StyledInput } from "./styled";

interface inputProps {
  value: string,
  setValue: (value:string) => void,
  placeholder?: string | undefined,
  type?: string,
  step?: number,
  min?: number,
  max?: number
}

const Input = ({ value, setValue, placeholder, type, step, min, max }: inputProps) => (
  <StyledInput
    aria-label="input"
    data-testid="input"
    value={value}
    type={type}
    step={step}
    min={min}
    max={max}
    placeholder={placeholder}
    onChange={(e: { target: HTMLInputElement }) => setValue(e.target.value)}
    minLength={0}
  />
);

export default Input;
