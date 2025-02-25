import React from "react";
import { BUTTON_COLORS } from "../../atoms/Button/constants.ts";
import { useNavigate } from "react-router-dom";
import { ListItemDetailsProps } from "./types.ts";
import "./ListItemDetails.scss";
import { Image, Button, ListItemInfo, Loader } from "../../index.ts";

export const ListItemDetails: React.FC<ListItemDetailsProps> = ({
  name,
  types,
  powers,
  abilities,
  experience,
  imageUrl,
  isLoading = false,
}) => {
  const navigate = useNavigate();
  const returnToList = () => {
    navigate("/");
  };

  return (
    <div className='list-item-details'>
      <div className='list-item-details__button-container'>
        <Button color={BUTTON_COLORS.TERTIARY} onClick={returnToList}>
          Back to List
        </Button>
      </div>
      <div className='list-item-details__card'>
        {isLoading ? (
          <Loader />
        ) : (
          <div className='list-item-details__card-content'>
            <Image imageUrl={imageUrl} name={name} />
            <div className='list-item-details__card-content-info'>
              <ListItemInfo
                name={name}
                types={types}
                powers={powers}
                abilities={abilities}
                experience={experience}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
