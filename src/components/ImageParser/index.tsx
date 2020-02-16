import React, { FC } from "react";

const ImageParser: FC<Props> = ({ url }) => (
  <img src={url} width="200" alt="image" />
);

export default ImageParser;

interface Props {
  url: string;
}
