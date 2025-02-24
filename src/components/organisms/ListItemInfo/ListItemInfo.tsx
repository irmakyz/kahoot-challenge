import React from "react";
import { ListItemInfoProps } from "./types.ts";
import { StatusBar } from "../../atoms/StatusBar/StatusBar.tsx";
import { Chip } from "../../atoms/Chip/Chip.tsx";
import { ItemStats } from "../../molecules/ItemStats/ItemStats.tsx";
import "./ListItemInfo.scss";

export const ListItemInfo: React.FC<ListItemInfoProps> = ({
  name,
  types,
  stats,
  abilities,
  baseExperience,
}) => {
  return (
    <div className='list-item-info'>
      <h1 className='list-item-info__name'>{name}</h1>
      <div className='list-item-info__types-container'>
        {types.map((type, index) => (
          <Chip label={type} key={index} color={"#9747ff"} />
        ))}
      </div>
      <div className='list-item-info__stats-container'>
        <h2 className='list-item-info__stats-title'>Base Stats</h2>
        {stats.map((stat, index) => (
          <StatusBar key={index} name={stat.name} value={stat.value} />
        ))}
      </div>
      <div className='list-item-info__abilities-container'>
        <h2 className='list-item-info__abilities-title'>Abilities</h2>
        <div className='list-item-info__abilities-chips'>
          {abilities.map((ability, index) => (
            <Chip label={ability} key={index} color={"#9747ff"} />
          ))}
        </div>
      </div>
      <div className='list-item-info__base-experience-container'>
        <ItemStats
          icon='https://cdn.builder.io/api/v1/image/assets/3511483645cf4a6fbedd7884395eee96/1fd04cdcdfc17362cbd3e9f5ac5f173040522bcff145c9070b8beac1c5edc632?apiKey=3511483645cf4a6fbedd7884395eee96&'
          label='Base Experience'
          values={[baseExperience]}
        />
      </div>
    </div>
  );
};
