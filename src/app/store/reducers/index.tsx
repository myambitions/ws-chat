import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from "history";
import { SettingsReducer } from "./settings";
import { MessagesReducer } from "./messages";
import { SocketReducer } from "./socket";
const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    settings: SettingsReducer,
    messages: MessagesReducer,
    socket: SocketReducer
  });

export default rootReducer;
