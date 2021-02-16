import React, { useState } from 'react';
import Mycomponent from './components/Mycomponent';
import Food from './components/Food';
import Wrapper from './components/Wrapper';
import './styles.scss';

function click() {
  console.log('click');
}

const App = () => {
  const food = ['Pizza', 'Hamburger', 'Coke'];

  return (
    <Wrapper>
      <h1>The magic happens here</h1>
      <Mycomponent title={'It Works'} />
      <Food food={food} />
      <button onClick={click}>Click</button>
      <input />
    </Wrapper>
    /*
      <>
      <h1>The magic happens here</h1>
      <Mycomponent title={'It Works'} />
      <Food food={food}/>
      </>
      */
  );
};

export default App;
