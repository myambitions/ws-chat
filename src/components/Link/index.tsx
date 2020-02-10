import React, { ReactNode, FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import { default as CoreLink, LinkProps } from "@material-ui/core/Link";
const Link: FC<Props> = ({ to, children, ...props }) => (
  <CoreLink underline="none" component={RouterLink} to={to} {...props}>
    {children}
  </CoreLink>
);
export default Link;

interface Props extends LinkProps {
  component?: React.ElementType;
  to: string;
  children: ReactNode;
}
