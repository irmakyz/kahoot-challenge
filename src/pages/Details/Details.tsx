import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchItemDetails } from "../../services/api.ts";
import { ListItemDetails } from "../../components/index.ts";
import "./Details.scss";
import { ItemDetails } from "../../types.ts";

const Details: React.FC = () => {
  const { detailsURL } = useParams<{ detailsURL: string }>();
  const {
    data: itemDetails,
    isLoading,
    error,
  } = useQuery<ItemDetails>({
    queryKey: ["itemDetails", detailsURL],
    queryFn: () => fetchItemDetails(detailsURL ?? "defaultURL"),
  });

  if (error) return <div className='details'>Error loading data</div>;

  if (!isLoading && !itemDetails)
    return <div className='details'>No data found</div>;

  return (
    <div className='details' data-testid='details'>
      <ListItemDetails
        name={itemDetails?.name}
        types={itemDetails?.types}
        abilities={itemDetails?.abilities}
        experience={itemDetails?.experience}
        powers={itemDetails?.powers}
        imageUrl={itemDetails?.imageUrl}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Details;
