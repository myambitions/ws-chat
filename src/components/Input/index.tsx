import React, { FC, FormEvent } from "react";
import s from "./styles.module.css";
import { FormControl, InputBase, FormLabel } from "@material-ui/core";
const Input: FC<Props> = ({
  value = "",
  label,
  placeholder,
  onChange,
  focus = false,
  keyPressed,
  className
}) => {
  return (
    <FormControl className={[s.formCtrl, className].join(" ")}>
      <FormLabel component="label" htmlFor="name">
        {label}
      </FormLabel>
      <InputBase
        id={label}
        className={s.input}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        autoComplete="off"
        autoFocus={focus}
        onKeyPress={keyPressed}
      />
    </FormControl>
  );
};

export default Input;

interface Props {
  value?: string;
  label?: string;
  placeholder?: string;
  onChange?: (e: FormEvent) => void;
  className?: string;
  focus?: boolean;
  keyPressed?: (event: any) => void;
}
