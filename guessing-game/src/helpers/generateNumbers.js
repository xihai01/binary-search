const generateNumbers = () => {
  const output = [];
  const min = Math.ceil(0);
  const max = Math.floor(1000);
  // populate output with 56 random numbers
  for (let i = 0; i < 56; i++) {
    const number = Math.floor(Math.random() * (max - min + 1) + min);
    output.push(number);
  }
  // sort output in ascending order
  return output.sort((a, b) => a - b);
};

export default generateNumbers;
