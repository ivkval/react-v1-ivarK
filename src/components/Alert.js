const Alert = (props) => {
  const change = (e) => props.onChange(e.target.value);

  return (
    <>
      <input autoFocus onChange={change} />
    </>
  );
};

export default Alert;
