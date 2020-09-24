import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import {store} from './components/App/Store'
import { TrasactionProvider } from "./components/Context/Context";
import ContextManage from './components/ContextManage/ContextManage'
ReactDOM.render(
  <React.StrictMode>
    <TrasactionProvider >
      <App />

    </TrasactionProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
