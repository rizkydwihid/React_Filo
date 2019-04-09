import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "unistore/react";
import { store } from "./store";
// import "./styles/index.css";
import AppRoute from "./AppRouter";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

const rootEl = document.getElementById("root");
const render = Component =>
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </Provider>,
    rootEl
  );

render(AppRoute);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
