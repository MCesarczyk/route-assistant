import { StyledSelect } from "./styled";

interface SelectProps {
  options: string[],
  value: string,
  setValue: (value: string) => void
};

const Select = ({ options, value, setValue }: SelectProps) => (
  <StyledSelect value={value} onChange={(e: { target: HTMLSelectElement }) => setValue(e.target.value)}>
    {options.map((option, index) =>
      <option key={index}>{option}</option>
    )}
  </StyledSelect>
);

export default Select;
