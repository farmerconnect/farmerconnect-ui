import { ButtonHTMLAttributes } from 'react';
import CustomStyles from '../CustomStyles';

export interface IButton {
  colors: IButtonColors;
}

export interface IButtonColors {
  primary: string;
  secondary: string;
  tertiary?: string;
}

export interface IButtonProps extends CustomStyles, ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor?: string;
  color?: string;
  hoverColor?: string;
}
