import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import generateNumbers from "./helpers/generateNumbers";
import reportWebVitals from "./reportWebVitals";

function getTargetAnswer() {
  return Math.random() * (56 - 0) + 0;
}

ReactDOM.render(
  <React.StrictMode>
    <App numbers={generateNumbers()} target={getTargetAnswer()} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
