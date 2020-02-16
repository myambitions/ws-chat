import { Actions, ActionTypes } from "./actions";
//@ts-ignore
import io from "socket.io-client";
import { Store } from "redux";
import { Message } from "app/types";

let socket: any = null;
const host = "http://127.0.0.1:3001";

export function chatMiddleware() {
  return (next: any) => (action: Actions) => {
    if (socket) {
      if (action.type === ActionTypes.SEND_MESSAGE) {
        // payload is messages
        socket.emit("send message", action.payload);
      }

      if (action.type === ActionTypes.SET_NAME_REQUEST) {
        socket.emit("set name", action.payload);
      }
    }
    return next(action);
  };
}

export default function(store: Store) {
  socket = io.connect(host);

  socket.on("connected", () => {
    store.dispatch(Actions.wsConnected());
  });

  socket.on("disconnected", () => {
    store.dispatch(Actions.wsDisconnected());
  });

  socket.on("name", (name: string) => {
    store.dispatch(Actions.setName(name));
  });

  socket.on("message", (message: Message) => {
    store.dispatch(Actions.receiveMessage(message));
  });
}
