import { ReactNode } from "react";
import { IButtonProps } from "../Button/interfaces";
import { TipDirection, TipPosition } from "../Infotip/interfaces";

export interface IActionIconButtonProps extends IButtonProps {
  onClick: () => void;
  hoverContent: ReactNode;
  clickContent: ReactNode;
  messageDuration?: number;
  position?: TipPosition;
  direction?: TipDirection;
  arrow?: boolean;
  keepOpen?: boolean;
}
