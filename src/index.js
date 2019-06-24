import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";

import "./styles.css";
import Main from "./pages/Main";

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
