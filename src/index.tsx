import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
import { StrictMode } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "../src/services/store";

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
