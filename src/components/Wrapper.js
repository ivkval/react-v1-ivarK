import React from 'react';

const Wrapper = (props) => {
  return <main className="flex">{props.children}</main>;
};

export default Wrapper;