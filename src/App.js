import React, { useState } from 'react';
import Mycomponent from './components/Mycomponent';
import Food from './components/Food';
import Wrapper from './components/Wrapper';
import Alert from './components/Alert';
import './styles.scss';

const App = () => {
  const food = ['Pizza', 'Hamburger', 'Coke'];

  const [message, setMessage] = useState('');

  const getMessage = (input) => {
    setMessage(input);
  };

  const click = () => {
    alert(message);
    setMessage('');
  };

  return (
    <Wrapper>
      <h1>The magic happens here</h1>
      <Mycomponent title={'It Works Bæsj'} />
      <Food food={food} />
      <button onClick={click}>Click me</button>
      <Alert getMessage={getMessage} value={message} />
    </Wrapper>
  );
};

export default App;
