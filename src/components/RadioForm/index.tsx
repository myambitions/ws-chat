import React, { FC, useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel
} from "@material-ui/core";
import { ApplicationState } from "app/types";
import StyledRadio from "components/Radio";
const RadioForm: FC<Props> = ({ list, title, code, onChoose, settings }) => {
  const [value, setValue] = useState();
  useEffect(() => {
    const val = settings[code];
    setValue(val);
  }, [settings, code]);
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{title}</FormLabel>
      <RadioGroup value={value || ""} aria-label={title} name={title}>
        {list.map(({ id, value }) => (
          <FormControlLabel
            key={id}
            value={id}
            control={<StyledRadio />}
            label={value}
            onClick={() => onChoose(code, id)}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

const mapStateToProps = ({ settings }: ApplicationState) => ({
  settings
});

export default connect(mapStateToProps)(RadioForm);

interface Props {
  list: any[];
  title: string;
  code: string;
  onChoose: (key: string, value: string) => void;
  settings: any;
}
