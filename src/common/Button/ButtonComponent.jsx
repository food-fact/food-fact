import React from 'react';
import ButtonStyles from './ButtonStyles.css';

const ButtonComponent = ({name, onClick}) => {
  return (
    <button className="button" onClick={onClick}>{name}</button>
  )
};

export default ButtonComponent;