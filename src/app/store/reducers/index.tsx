import { combineReducers } from "redux";
import { connectRouter, RouterState } from "connected-react-router";
import { History } from "history";

const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history)
  });

export default rootReducer;
export interface ApplicationState {
  router: RouterState;
}
