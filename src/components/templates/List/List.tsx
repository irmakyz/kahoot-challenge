import React from "react";
import { ListItem } from "../../organisms/ListItem/ListItem.tsx";
import { ListProps } from "./types";
import "./List.scss";
import Loader from "../../atoms/Loader/Loader.tsx";

export const List: React.FC<ListProps> = ({ listItems, isLoading = false }) => {
  return (
    <div className='list'>
      {isLoading && <Loader />}
      {!isLoading &&
        listItems.length !== 0 &&
        listItems.map((listItem, index) => (
          <ListItem
            key={index}
            name={listItem.name}
            detailsURL={listItem.detailsURL}
          />
        ))}
    </div>
  );
};
