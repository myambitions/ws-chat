import React, { useState, FC, FormEvent, useEffect } from "react";
import Button from "components/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Input from "components/Input";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Actions } from "app/store/actions";
import { ApplicationState } from "app/types";
import s from "./styles.module.css";
const CoreDialog: FC<Props> = ({ settings, setName }) => {
  const { name, language } = settings;
  const [open, setOpen] = useState(true);
  const [value, setValue] = useState("");
  const [translations] = useState(require(`translations/${language}.json`));
  const submit = (e: FormEvent) => {
    if (value.length > 0) {
      setName(value);
      setOpen(false);
    }
    e.preventDefault();
  };
  const handleChange = (e: FormEvent) => {
    const { value } = e.target as HTMLFormElement;
    setValue(value);
  };

  useEffect(() => {
    !name && setOpen(true);
  }, [name]);
  return (
    <>
      <Dialog
        open={open}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">
          {translations.enterYourName}
        </DialogTitle>
        <form onSubmit={submit} className={s.form}>
          <Input
            value={value}
            onChange={handleChange}
            className={s.input}
            placeholder={translations.enterYourName}
          />
          <Button type="submit" className={s.btn}>
            {translations.submit}
          </Button>
        </form>
      </Dialog>
    </>
  );
};
const mapStateToProps = ({ settings }: ApplicationState) => ({
  settings
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  setName: (name: string) => dispatch(Actions.setNameRequest(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(CoreDialog);

interface Props {
  // TODO Fix any
  settings: any;
  setName: (name: string) => void;
}
