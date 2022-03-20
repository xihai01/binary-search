import classNames from "classnames";

const clickHandler = function (target, number, numbers, setCorrect, setState) {
  // get number of tile clicked
  // compare to target answer
  const answer = numbers[target].number;
  const guess = number;
  console.log(answer);
  console.log(guess);
  if (guess === answer) {
    // display correct page if target guessed
    // setCorrect
    console.log("correct");
    setCorrect(true);
    return;
  }
  // set active to false from beginning to guess if guess < target
  // set active to false from end to guess if guess > target
  const newNumbers = numbers.map((obj) => {
    if (guess < answer && obj.number <= guess) {
      return { number: obj.number, active: false };
    }

    if (guess > answer && obj.number >= guess) {
      return { number: obj.number, active: false };
    }
    return { ...obj };
  });
  setState((prev) => {
    return { numbers: newNumbers, target: prev.target };
  });
};

const Tiles = (props) => {
  const { numbers, target, correct, setCorrect, setState } = props;
  console.log(numbers);

  const listOfNumbers = numbers.map((data, index) => {
    const displayClass = classNames("active", {
      inactive: !data.active,
      correct: correct === true && data.number === numbers[target].number,
    });
    console.log(displayClass);
    return (
      <div
        key={index}
        className={displayClass}
        onClick={() => {
          if (displayClass !== "active inactive") {
            return clickHandler(
              target,
              data.number,
              numbers,
              setCorrect,
              setState
            );
          }
        }}
      >
        {data.number}
      </div>
    );
  });
  return <>{listOfNumbers}</>;
};

export default Tiles;
