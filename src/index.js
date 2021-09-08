import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { GlobalStyle, Theme } from "./Theme";

ReactDOM.render(
  <React.StrictMode>
    <Theme>
      <GlobalStyle />
      <App />
    </Theme>
  </React.StrictMode>,
  document.getElementById("root")
);
