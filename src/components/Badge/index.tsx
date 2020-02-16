import React, { useEffect, FC, useState, ReactNode } from "react";
import { connect } from "react-redux";
import { ApplicationState, Message } from "app/types";
import Badge from "@material-ui/core/Badge";
const CoreBadge: FC<Props> = ({
  className,
  messages,
  children,
  router: {
    location: { pathname }
  }
}) => {
  const [count, setCount] = useState(0);
  const [_messages, setMessages] = useState<Message[]>([]);
  useEffect(() => {
    if (pathname === "/") {
      setMessages(messages);
      setCount(0);
    }
    if (pathname !== "/" && _messages.length !== messages.length) {
      setCount(prev => prev + 1);
    }
  }, [pathname, messages, _messages.length]);
  return (
    <Badge badgeContent={count} className={className} color="primary">
      {children}
    </Badge>
  );
};

const mapStateToProps = ({ messages, router }: ApplicationState) => ({
  messages,
  router
});

export default connect(mapStateToProps)(CoreBadge);

interface Props {
  messages: Message[];
  router: any;
  className?: string;
  children: ReactNode;
}
