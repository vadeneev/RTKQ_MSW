import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { worker } from "./mock/mock";
import App from "./App";
import { store } from "./store/store";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");

worker.start();

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
