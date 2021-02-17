import React, { useState } from 'react';
import Mycomponent from './components/Mycomponent';
import Food from './components/Food';
import Wrapper from './components/Wrapper';
import './styles.scss';

const App = () => {
  const food = ['Pizza', 'Hamburger', 'Coke'];

  return (
    <Wrapper>
      <h1>The magic happens here</h1>
      <Mycomponent title={'It Works'} />
      <Food food={food} />
      <StateAndInput />
    </Wrapper>
  );
};

function StateAndInput() {
  let [input, setInput] = useState('');

  function click() {
    alert(input);
    setInput('');
  }

  function change(e) {
    setInput(e.target.value);
  }

  return (
    <>
      <button onClick={click}>Click</button>
      <input autoFocus onChange={change} value={input} />
    </>
  );
}

export default App;
