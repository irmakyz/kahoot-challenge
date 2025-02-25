import { ChipProps } from "./types";
import React from "react";
import "./Chip.scss";

export const Chip: React.FC<ChipProps> = ({ label, color }) => {
  return (
    <span className='chip' style={{ color }}>
      {label}
    </span>
  );
};