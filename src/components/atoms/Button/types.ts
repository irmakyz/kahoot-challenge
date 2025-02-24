import { BUTTON_SIZES, BUTTON_COLORS } from "./constants";

export interface ButtonProps {
  size?: (typeof BUTTON_SIZES)[keyof typeof BUTTON_SIZES];
  color?: (typeof BUTTON_COLORS)[keyof typeof BUTTON_COLORS] | string;
  onClick: () => void;
  children: React.ReactNode;
}
