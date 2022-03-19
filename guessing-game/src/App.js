import { useState } from "react";
import "./App.css";
import Tiles from "./components/Tiles";
import generateNumbers from "./helpers/generateNumbers";

function getTargetAnswer() {
  // return a random index
  return Math.floor(Math.random() * (56 - 0) + 0);
}

function App(props) {
  const [state, setState] = useState({
    numbers: generateNumbers(),
    target: getTargetAnswer(),
  });
  const [correct, setCorrect] = useState(false);

  return (
    <div className="App">
      <h1>Binary Search</h1>
      <h2>Attempt: 25</h2>
      <div id="main">
        <Tiles
          numbers={state.numbers}
          target={state.target}
          setCorrect={setCorrect}
          setState={setState}
        />
      </div>
      <input type="button" name="btn" value="Play again" />
    </div>
  );
}

export default App;
