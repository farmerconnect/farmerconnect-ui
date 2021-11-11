import { ReactNode } from "react";
import { TipDirection, TipPosition } from "../Infotip/interfaces";

export interface IActionInfotipProps {
  disabled?: boolean;
  hoverContent: ReactNode;
  clickContent: ReactNode;
  messageDuration?: number;
  position?: TipPosition;
  direction?: TipDirection;
  arrow?: boolean;
  keepOpen?: boolean;
}
