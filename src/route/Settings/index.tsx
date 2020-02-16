import React, { FC, useEffect, FormEvent, useState, useRef } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import RadioForm from "components/RadioForm";
import Input from "components/Input";
import Select from "components/Select";
import Button from "components/Button";
import { ApplicationState } from "app/types";
import { Actions } from "app/store/actions";
import { settings as mockedSettings } from "mocks/settings";
import s from "./styles.module.css";
const Settings: FC<Props> = ({
  settings,
  setName,
  updateSettings,
  setDefaults
}) => {
  const { theme, clock, sendbb, language } = mockedSettings;
  const { name, language: lang } = settings;
  const [username, setUsername] = useState(name);
  const [translations, setTranslations] = useState();
  const formElement = useRef<HTMLFormElement>(null);
  const handleChoose = (key: string, value: string) => {
    updateSettings(key, value);
  };
  const handleName = (e: FormEvent) => {
    const { value } = e.target as HTMLFormElement;
    setUsername(value);
  };
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // actually it submits only username by hiting Enter
    if (username.length > 0 && name !== username) {
      setName(username);
    }
  };

  const reset = () => {
    formElement.current?.reset();
    setDefaults();
  };
  useEffect(() => {
    setUsername(name);
  }, [settings, name]);
  useEffect(() => {
    setTranslations(require(`translations/${lang}.json`));
  }, [lang]);
  if (!translations) return null;
  return (
    <>
      <div className="border">
        <form className={s.form} onSubmit={onSubmit} ref={formElement}>
          <Input
            value={username}
            label={translations.username}
            onChange={handleName}
          />
          <RadioForm
            list={theme}
            title={translations.interfaceColor}
            onChoose={handleChoose}
            code="theme"
          />
          <RadioForm
            list={clock}
            title={translations.clockDisplay}
            onChoose={handleChoose}
            code="clock"
          />
          <RadioForm
            list={sendbb}
            title={translations.sendByCtrlEnter}
            onChoose={handleChoose}
            code="sendbb"
          />
          <Select list={language} onChoose={handleChoose} code="language" />
        </form>
      </div>
      <Button onClick={reset} type="reset">
        {translations.resetToDefaults}
      </Button>
    </>
  );
};

const mapStateToProps = ({ settings }: ApplicationState) => ({
  settings
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  setName: (name: string) => dispatch(Actions.setNameRequest(name)),
  updateSettings: (key: string, value: string) =>
    dispatch(Actions.updateSettings(key, value)),
  setDefaults: () => dispatch(Actions.setDefaultSettings())
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

interface Props {
  settings: any;
  setName: (name: string) => void;
  updateSettings: (key: string, value: string) => void;
  setDefaults: () => void;
}
