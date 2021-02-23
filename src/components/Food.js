const Food = ({ food }) => {
  const getFood = food.map((item, index) => <li key={index}>{item}</li>);

  return <ul>{getFood}</ul>;
};

export default Food;
