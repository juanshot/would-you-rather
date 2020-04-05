import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducers";
import middleware from "./store/middlewares";
import composeEnhancers from "./store/enhancers";

const store = createStore(reducer, composeEnhancers(middleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
