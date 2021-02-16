import React from 'react';

const Food = () => {
  const food = ['Pizza', 'Hamburger', 'Coke'];

  return (
    <ul>
      {food.map((food) => (
        <li>{food}</li>
      ))}
    </ul>
  );
};

export default Food;
