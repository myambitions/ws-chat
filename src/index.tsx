import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import * as serviceWorker from "./serviceWorker";
import App from "./app";
import configureStore, { history } from "./app/store/configureStore";
const store = configureStore();
const render = () =>
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
  );
render();

// Hot reloading
// if (module.hot) {
// 	// Reload components
// 	module.hot.accept('./app', () => {
// 		render();
// 	});
// }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
