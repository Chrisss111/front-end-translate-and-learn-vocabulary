import React from 'react';

const Button = (props) => {

  const buttonClick = () => {
    props.changePageButtonClick(props.name);
    
  };
  
  return <button onClick={buttonClick}>{props.name}</button>;
};

export default Button;
