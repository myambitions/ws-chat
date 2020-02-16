import React, { FC } from "react";
const Icon: FC<Props> = ({
  icon,
  height = 24,
  width = 24,
  className = "",
  onClick
}) => (
  <svg width={width} height={height} className={className} onClick={onClick}>
    <use xlinkHref={`/i/sprite.svg#${icon}`} />
  </svg>
);
export default Icon;
interface Props {
  icon: string;
  height?: number;
  width?: number;
  className?: string;
  onClick?: () => void;
}
