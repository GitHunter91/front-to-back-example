import React from 'react';

const Button = (props) => {
  return (
    <div className='button' onClick={props.action}>Light Switch</div>
  );
};

export default Button;