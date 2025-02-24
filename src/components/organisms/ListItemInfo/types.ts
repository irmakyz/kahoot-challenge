import { Stat } from "../../../types";

export interface ListItemInfoProps {
  name: string;
  types: string[];
  stats: Stat[];
  abilities: string[];
  baseExperience: number;
}
