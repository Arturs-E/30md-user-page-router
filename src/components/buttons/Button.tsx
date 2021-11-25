import React, { FC } from 'react';
import './Button.scss';

interface ButtonProps {
  title: string;
  clickHandler: () => void;
}

const Button:FC<ButtonProps> = ({ title, clickHandler }) => (
  <button className="button" onClick={clickHandler}>
    {title}
  </button>
);

export default Button;
