import React from 'react';
import Mycomponent from './components/Mycomponent';
//import Food from "./components/Food";
import './styles.scss';

const App = () => {
  const food = ['Pizza', 'Hamburger', 'Coke'];
  return (
    <>
      <h1>The magic happens here</h1>
      <Mycomponent title={'It Works'} />
      <ul>
        {food.map((food) => (
          <li>{food}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
