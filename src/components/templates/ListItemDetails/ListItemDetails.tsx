import React from "react";
import Image from "../../atoms/Image/Image.tsx";
import { BUTTON_COLORS } from "../../atoms/Button/constants.ts";
import Button from "../../atoms/Button/Button.tsx";
import { useNavigate } from "react-router-dom";
import { ListItemInfo } from "../../organisms/ListItemInfo/ListItemInfo.tsx";
import { ListItemDetailsProps } from "./types.ts";
import "./ListItemDetails.scss";
import Loader from "../../atoms/Loader/Loader.tsx";

export const ListItemDetails: React.FC<ListItemDetailsProps> = ({
  name,
  types,
  stats,
  abilities,
  baseExperience,
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
                stats={stats}
                abilities={abilities}
                baseExperience={baseExperience}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
