import { ReactNode } from "react";
import { LibButton } from "./Button.style";

type Props = {
  children?: ReactNode;
};

const Button = ({ children }: Props) => {
  return <LibButton type="button">{children}</LibButton>;
};

export default Button;
