import { useState } from "react";
import "./App.css";
import Tiles from "./components/Tiles";
import generateNumbers from "./helpers/generateNumbers";

function getTargetAnswer() {
  return Math.random() * (56 - 0) + 0;
}

function App(props) {
  const [state, setState] = useState({
    numbers: generateNumbers(),
    target: getTargetAnswer(),
  });
  return (
    <div className="App">
      <header className="App-header">
        <h1>Binary Search In Action</h1>
      </header>
      <h2>Attempt: 25</h2>
      <div id="main">
        <Tiles numbers={state.numbers} target={state.target} />
      </div>
      <input type="button" />
    </div>
  );
}

export default App;
