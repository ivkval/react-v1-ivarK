import { useState } from 'react';

const Alert = ({ setInputFromChild }) => {
  const [state, setState] = useState('');

  const btnClick = () => {
    setInputFromChild(state);
    setState('');
  };

  const input = (e) => setState(e.target.value);

  return (
    <>
      <button onClick={btnClick}>Alert</button>
      <input onChange={input} value={state} />
    </>
  );
};

export default Alert;
