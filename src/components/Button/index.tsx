import { MouseEventHandler } from "react";
import { StyledButton } from "./styled";

type buttonProps = {
  type?: "button" | "submit" | "reset" | undefined,
  primary?: string | undefined,
  title: string,
  onClick: MouseEventHandler
}

const Button = ({ type, primary, title, onClick }: buttonProps) => (
  <StyledButton type={type} primary={primary} onClick={onClick}>
    {title}
  </StyledButton>
);

export default Button;