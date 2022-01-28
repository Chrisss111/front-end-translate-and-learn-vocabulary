import React from 'react';

const Button = (props) => {

  const buttonClick = () => {
    props.changePageButtonClick();
    console.log('test from button component')
  };

  return <button onClick={buttonClick}>{props.name}</button>;
};

export default Button;
