import { ReactNode } from "react";
import { IButtonProps } from "../Button/interfaces";
import { IInfotipProps } from "../Infotip/interfaces";

export interface IActionButtonProps {
  onClick: () => boolean;
  messageDuration: number;
  hoverContent: ReactNode;
  clickContent: ReactNode;
  buttonStyles?: IButtonProps;
  infotipProps?: Partial<IInfotipProps>;
  id?: string;
}

