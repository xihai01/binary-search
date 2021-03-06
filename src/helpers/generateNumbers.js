const generateNumbers = () => {
  const output = [];
  const min = Math.ceil(0);
  const max = Math.floor(1000);
  // populate output with 56 random numbers
  for (let i = 0; i < 56; i++) {
    const obj = { number: 0, active: true };
    const number = Math.floor(Math.random() * (max - min + 1) + min);
    obj.number = number;
    output.push(obj);
  }
  // sort output in ascending order
  return output.sort((a, b) => a.number - b.number);
};

const getTargetAnswer = () => {
  // return a random index
  return Math.floor(Math.random() * (56 - 0) + 0);
};

export { generateNumbers, getTargetAnswer };
