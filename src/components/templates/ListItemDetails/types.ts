import { Stat } from "../../../types";

export interface ListItemDetailsProps {
  name: string;
  types: string[];
  stats: Stat[];
  abilities: string[];
  baseExperience: number;
  imageUrl: string;
  isLoading?: boolean;
}
