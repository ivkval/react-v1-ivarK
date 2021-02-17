import React, { useState } from 'react';
import Mycomponent from './components/Mycomponent';
import Food from './components/Food';
import Wrapper from './components/Wrapper';
import Alert from './components/Alert';
import './styles.scss';

const App = () => {
  const food = ['Pizza', 'Hamburger', 'Coke'];

  let [message, setMessage] = useState('');

  function handler(newMessage) {
    setMessage(newMessage);
  }

  function click() {
    alert(message);
    setMessage('');
  }

  return (
    <Wrapper>
      <h1>The magic happens here</h1>
      <Mycomponent title={'It Works'} />
      <Food food={food} />
      <button onClick={click}>Click me</button>
      <Alert propName={handler} />
    </Wrapper>
  );
};

export default App;
