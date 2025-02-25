import React from "react";
import { StatusBarProps } from "./types";
import "./StatusBar.scss";

 export const StatusBar: React.FC<StatusBarProps> = ({ name, value }) => {
  const maxValue = 100;
  const percentage = (value / maxValue) * 100;

  return (
    <div className='status-bar'>
      <span className='status-name'>{name}</span>
      <div className='status-bar-container'>
        <div
          className='status-bar-fill'
          data-testid='status-bar'
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className='status-value'>{value}</span>
    </div>
  );
};