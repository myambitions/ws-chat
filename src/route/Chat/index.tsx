import React, {
  FC,
  FormEvent,
  useState,
  useEffect,
  useRef,
  useCallback
} from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { Fab } from "@material-ui/core";
import TelegramIcon from "@material-ui/icons/Telegram";
import { Actions } from "app/store/actions";
import { Message as IMessage, ApplicationState } from "app/types";
import Input from "components/Input";
import Message from "components/Message";
import s from "./styles.module.css";
const Chat: FC<Props> = ({
  settings: { name, clock, sendbb, language },
  messages,
  sendMessage
}) => {
  const [value, setValue] = useState("");
  const [translations] = useState(require(`translations/${language}.json`));
  const chatWindow = useRef<HTMLDivElement>(null);
  const submit = useCallback(() => {
    if (value.length > 0) {
      const date = new Date();
      const m = { from: name, text: value, date };
      sendMessage(m);
      setValue("");
    }
  }, [name, value, sendMessage]);
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (sendbb === "on" && e.ctrlKey && e.keyCode === 13) {
        submit();
      } else if (sendbb !== "on" && !e.ctrlKey && e.keyCode === 13) {
        submit();
      }
    },
    [sendbb, submit]
  );
  const handleChange = (e: FormEvent) => {
    const { value } = e.target as HTMLFormElement;
    setValue(value);
  };
  const getTime = (date: Date) => {
    const d = new Date(date);
    const hours = d.getHours();
    const m = d.getMinutes();
    const minutes = m < 10 ? "0" + m : m;
    const hours12 = ((hours + 11) % 12) + 1;
    const ampm = clock === "12";
    const suffix = hours >= 12 ? "PM" : "AM";
    return `${ampm ? hours12 : hours}:${minutes} ${ampm ? suffix : ""}`;
  };
  useEffect(() => {
    const bottom = chatWindow.current?.scrollHeight;
    chatWindow.current?.scrollTo({ top: bottom });
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);
  return (
    <>
      {messages.length > 0 ? (
        <div className={`border ${s.chatNotEmpty}`} ref={chatWindow}>
          {messages.map((message, i) => (
            <Message
              {...message}
              name={name}
              key={i}
              handleTime={getTime}
              translations={translations}
            />
          ))}
        </div>
      ) : (
        <div className={`border ${s.chatEmpty}`}>{translations.chatIntro}</div>
      )}
      <div className={s.control}>
        <Input
          placeholder={translations.sendMessage}
          value={value}
          onChange={handleChange}
          keyPressed={handleKeyDown}
          focus
        />
        <Fab
          size="small"
          color="primary"
          className={s.sendBtn}
          onClick={submit}
        >
          <TelegramIcon />
        </Fab>
      </div>
    </>
  );
};
const mapStateToProps = ({ settings, messages }: ApplicationState) => ({
  settings,
  messages
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  sendMessage: (message: IMessage) => dispatch(Actions.sendMessage(message))
});
export default connect(mapStateToProps, mapDispatchToProps)(Chat);

interface Props {
  settings: any;
  messages: IMessage[];
  sendMessage: (message: IMessage) => void;
}
