import React from "react";
import { ListItemInfoProps } from "./types.ts";
import { StatusBar, Chip, ItemStats } from "../../index.ts";
import { FaStar } from "react-icons/fa";
import "./ListItemInfo.scss";

export const ListItemInfo: React.FC<ListItemInfoProps> = ({
  name,
  types,
  powers,
  abilities,
  experience,
}) => {
  return (
    <div className='list-item-info'>
      <h1 className='list-item-info__name'>{name}</h1>
      <div className='list-item-info__types-container'>
        {types?.map((type, index) => (
          <Chip label={type} key={index} color={"#9747ff"} />
        ))}
      </div>
      <div className='list-item-info__stats-container'>
        <h2 className='list-item-info__stats-title'>Powers</h2>
        {powers?.map((power, index) => (
          <StatusBar key={index} name={power.name} value={power.value} />
        ))}
      </div>
      <div className='list-item-info__abilities-container'>
        <h2 className='list-item-info__abilities-title'>Abilities</h2>
        <div className='list-item-info__abilities-chips'>
          {abilities?.map((ability, index) => (
            <Chip label={ability} key={index} color={"#9747ff"} />
          ))}
        </div>
      </div>
      <div className='list-item-info__base-experience-container'>
        <ItemStats
          icon={<FaStar />}
          label='Base Experience'
          values={experience ? [experience] : [0]}
        />
      </div>
    </div>
  );
};
