import React from "react";
import { ListProps } from "./types";
import "./List.scss";
import { ListItem, Loader } from "../../index.ts";

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
