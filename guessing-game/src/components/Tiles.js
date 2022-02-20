const Tiles = (props) => {
  const { numbers } = props;
  const listOfNumbers = numbers.map((data) => {
    return <div>{data}</div>;
  });
  return <>{listOfNumbers}</>;
};

export default Tiles;
