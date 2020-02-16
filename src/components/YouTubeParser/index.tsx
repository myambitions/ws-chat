import React, { FC } from "react";

const YouTubeParser: FC<Props> = ({ url }) => (
  <iframe id="ytplayer" width="200" src={url.replace("watch?v=", "embed/")} />
);

export default YouTubeParser;

interface Props {
  url: string;
}
