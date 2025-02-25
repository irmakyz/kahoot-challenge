import { Stat } from "../../../types";

export interface ListItemInfoProps {
  name?: string;
  types?: string[];
  powers?: Stat[];
  abilities?: string[];
  experience?: number | string;
}
