import React from "react";
import { Radio } from "@material-ui/core";
import s from "./styles.module.css";
const StyledRadio = (props: any) => {
  return (
    <Radio
      className={s.root}
      disableRipple
      color="default"
      checkedIcon={<span className={[s.icon, s.checkedIcon].join(" ")} />}
      icon={<span className={s.icon} />}
      {...props}
    />
  );
};

export default StyledRadio;
