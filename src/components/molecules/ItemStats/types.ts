import { ReactNode } from "react";

export interface ItemStatsProps {
  icon?: ReactNode;
  label?: string;
  values?: (string | number)[];
}
