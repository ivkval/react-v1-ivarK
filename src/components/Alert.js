const Alert = ({ getMessage, value }) => {
  const input = (e) => {
    getMessage(e.target.value);
  };

  return <input onChange={input} value={value} />;
};

export default Alert;
