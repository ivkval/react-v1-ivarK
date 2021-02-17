import { useState } from 'react';

const Alert = ({ propName, value }) => {
  const [input, setInput] = useState('');

  function newInput(event) {
    setInput(event.target.value);
    propName(input);
  }

  return <input autoFocus onChange={newInput} />;
};

export default Alert;
