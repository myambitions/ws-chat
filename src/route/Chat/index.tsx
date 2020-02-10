import React, { FC, FormEvent } from "react";
import { Fab } from "@material-ui/core";
import TelegramIcon from "@material-ui/icons/Telegram";
import s from "./styles.module.css";
const Chat: FC = () => {
  const submit = (e: FormEvent) => {
    // TODO use useState hook to handle value and clear input
    const { value } = (e.target as HTMLFormElement).message;
    console.log(value);
    e.preventDefault();
  };
  return (
    <>
      <div className={s.chat}>chat here</div>
      <form className={s.control} onSubmit={submit}>
        <input
          type="text"
          name="message"
          className={s.input}
          placeholder="Enter message"
        />
        <Fab size="small" color="primary" className={s.remove} type="submit">
          <TelegramIcon />
        </Fab>
      </form>
    </>
  );
};

export default Chat;
