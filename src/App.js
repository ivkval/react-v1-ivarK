import React, { useState } from 'react';
import Mycomponent from './components/Mycomponent';
import Food from './components/Food';
import Wrapper from './components/Wrapper';
import Alert from './components/Alert';
import './styles.scss';

const App = () => {
  const food = ['Pizza', 'Hamburger', 'Coke'];

  const [inputFromChild, setInputFromChild] = useState('');

  return (
    <Wrapper>
      <h1>The magic happens here</h1>
      <Mycomponent title={'It Works'} />
      <Food food={food} />
      <Alert setInputFromChild={setInputFromChild} />
      <p>{inputFromChild}</p>
    </Wrapper>
  );
};

export default App;
