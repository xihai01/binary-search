const clickHandler = function (target, number, numbers, setCorrect, setState) {
  // get number of tile clicked
  // compare to target answer
  const answer = target;
  const guess = number;
  console.log(answer);
  if (guess === answer) {
    // display correct page if target guessed
    // setCorrect
    setCorrect(true);
    return;
  }
  // set active to false from beginning to guess if guess < target
  // set active to false from end to guess if guess > target
  const newNumbers = numbers.map((obj) => {
    if (guess < answer && obj.number < guess) {
      return { number: obj.number, active: false };
    }

    if (guess > answer && obj.number > guess) {
      return { number: obj.number, active: false };
    }
    return { ...obj };
  });
  setState((prev) => {
    return { numbers: newNumbers, target: prev.target };
  });
};

const Tiles = (props) => {
  const { numbers, target, setCorrect, setState } = props;
  const listOfNumbers = numbers.map((data, index) => {
    return (
      <div
        key={index}
        onClick={() =>
          clickHandler(target, data.number, numbers, setCorrect, setState)
        }
      >
        {data.number}
      </div>
    );
  });
  return <>{listOfNumbers}</>;
};

export default Tiles;
