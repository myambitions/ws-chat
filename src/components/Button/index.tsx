import React, { FC, MouseEvent } from "react";
import s from "./styles.module.css";
const Button: FC<Props> = ({
  id,
  children,
  className = "",
  type,
  ...props
}) => (
  <button
    id={id}
    className={[s.button, className].join(" ")}
    type={type}
    {...props}
  >
    {children}
  </button>
);
export default Button;
interface Props {
  id?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (event: MouseEvent) => void;
}
