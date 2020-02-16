import React, { FC, useState, FormEvent, useEffect, useCallback } from "react";
import { FormControl, NativeSelect, FormLabel } from "@material-ui/core";
import s from "./styles.module.css";
const Select: FC<Props> = ({ list, code, onChoose }) => {
  const [value, setValue] = useState("");
  const handleSelected = (e: FormEvent) => {
    const { value } = e.target as HTMLFormElement;
    onChoose(code, value);
    setValue(value);
  };
  const findFromLocalStorage = useCallback(() => {
    return localStorage.getItem(code);
  }, [code]);
  useEffect(() => {
    const l = findFromLocalStorage();
    setValue(l || "");
  }, [value, findFromLocalStorage]);
  return (
    <FormControl className={s.root}>
      <FormLabel htmlFor={code}>Language</FormLabel>
      <NativeSelect
        className={s.input}
        id={code}
        value={value}
        onChange={handleSelected}
      >
        <option disabled value="">
          None
        </option>
        {list.map(({ id, value }) => (
          <option key={id} value={id}>
            {value}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default Select;

interface Props {
  list: any[];
  code: string;
  onChoose: (key: string, value: string) => void;
}
