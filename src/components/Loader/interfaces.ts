import { ReactNode } from 'react';
import CustomStyles from '../CustomStyles';

export interface ILoaderIcon {
  size: number;
  color: string;
}

interface ILoaderButton {
  color: string;
}

export interface ILoader {
  icon: ILoaderIcon;
  button: ILoaderButton;
}

interface ILoaderOption {
  message: string;
  duration?: number;
}

interface ILoaderError {
  error: boolean;
  message: string;
}

export interface ILoaderProps extends CustomStyles {
  show?: boolean;
  options?: ILoaderOption[];
  iconSize?: number;
  iconColor?: string;
  buttonText?: string | ReactNode;
  errorOptions?: ILoaderError;
  onButtonClick?: () => void;
}
