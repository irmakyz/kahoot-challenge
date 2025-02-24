import React from "react";
import { ListItemProps } from "./types.ts";
import Button from "../../atoms/Button/Button.tsx";
import "./ListItem.scss";
import { useNavigate } from "react-router-dom";


export const ListItem: React.FC<ListItemProps> = ({ name, detailsURL }) => {
  const navigate = useNavigate();
  const handleOnClick = ()=>{
    navigate(`/details/${encodeURIComponent(detailsURL)}`);
  }

  return (
    <article className='list-item'>
      <div className='list-item__content'>
        <div className='list-item__info'>
          <div className='list-item__header'>
            <h2 className='list-item__name'>{name}</h2>
          </div>
        </div>
      </div>
      <div className='list-item__action-button-container'>
        <Button onClick={handleOnClick}>Details</Button>
      </div>
    </article>
  );
};
