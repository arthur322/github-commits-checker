import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { toast } from "react-toastify";

import "./styles.css";
import "react-toastify/dist/ReactToastify.min.css";
import Main from "./pages/Main";

toast.configure();

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
