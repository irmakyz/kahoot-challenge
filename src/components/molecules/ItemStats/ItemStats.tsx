import React from "react";
import { ItemStatsProps } from "./types.ts";
import "./ItemStats.scss";

export const ItemStats: React.FC<ItemStatsProps> = ({
  icon,
  label,
  values,
}) => {
  return (
    <div className='item-stats'>
      <img src={icon} alt='' className='item-stats__icon' />
      <span className='item-stats__label'>{label}</span>:
      {values.map((value) => (
        <span key={value} className='item-stats__value'>
          {value}
        </span>
      ))}
    </div>
  );
};
