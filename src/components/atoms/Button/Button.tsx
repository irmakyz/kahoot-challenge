import React from 'react';
import './Button.scss';
import { ButtonProps } from './types';
import { BUTTON_SIZES, BUTTON_COLORS } from './constants.ts';

export const Button: React.FC<ButtonProps> = ({ size = BUTTON_SIZES.SMALL, color = BUTTON_COLORS.PRIMARY, onClick, children }) => {
  return (
    <button className={`button button--${size} button--${color}`} onClick={onClick}>
      {children}
    </button>
  );
};