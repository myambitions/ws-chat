import React, { FC } from "react";
import { Message as IMessage } from "app/types";
import s from "./styles.module.css";
import YouTubeParser from "components/YouTubeParser";
import ImageParser from "components/ImageParser";
const ytRe = /(http:|https:|)\/\/(www.)?(youtu(be\.com|\.be|be\.googleapis\.com))\/(watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/;
const imgRe = /(https?:\/\/.*\.(?:png|jpg))/i;
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
  const isYouTubeLink = text.match(ytRe);
  const isImageLink = text.match(imgRe);
  return (
    <div className={`${s.message} ${isMe && s.own}`}>
      <div className={s.from}>
        {isMe ? you : from}, {time}
      </div>
      <div className={s.text}>
        {isYouTubeLink ? (
          <YouTubeParser url={text} />
        ) : isImageLink ? (
          <ImageParser url={text} />
        ) : (
          text
        )}
      </div>
    </div>
  );
};

export default Message;

interface Props extends IMessage {
  name: string;
  handleTime: (date: Date) => void;
  translations: any;
}
