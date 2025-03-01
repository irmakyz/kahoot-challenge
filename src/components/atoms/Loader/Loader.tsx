import React from "react";
import "./Loader.scss";
import pokeball from "../../../assets/images/pokeball.png";

export const Loader: React.FC = () => {
  return (
    <div className='loader' data-testid="loader">
      <img src={pokeball} alt='Pokeball' />
    </div>
  );
};