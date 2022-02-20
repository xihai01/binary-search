const Tiles = (props) => {
  const { numbers } = props;
  const listOfNumbers = numbers.map((data, index) => {
    return <div key={index}>{data}</div>;
  });
  return <>{listOfNumbers}</>;
};

export default Tiles;
