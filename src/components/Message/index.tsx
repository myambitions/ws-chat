import React, { FC } from "react";
import { Message as IMessage } from "app/types";
import s from "./styles.module.css";
const Message: FC<Props> = ({
  from,
  text,
  date,
  name,
  handleTime,
  translations: { you }
}) => {
  const isMe = from === name;
  const time = handleTime(date);
  return (
    <div className={`${s.message} ${isMe && s.own}`}>
      <div className={s.from}>
        {isMe ? you : from}, {time}
      </div>
      <div className={s.text}>{text}</div>
    </div>
  );
};

export default Message;

interface Props extends IMessage {
  name: string;
  handleTime: (date: Date) => void;
  translations: any;
}
