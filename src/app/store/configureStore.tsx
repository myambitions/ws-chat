import { applyMiddleware, createStore, compose } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import createRootReducer from "./reducers";
import { chatMiddleware } from "./socketMiddleware";
import socket from "app/store/socketMiddleware";

export const history = createBrowserHistory();

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  const store = createStore(
    createRootReducer(history),
    composeEnhancers(applyMiddleware(routerMiddleware(history), chatMiddleware))
  );
  socket(store);
  return store;
}
