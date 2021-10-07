import { ReactNode } from 'react';

export type TipDirection = 'bottom' | 'left' | 'right' | 'top';

export type TipPosition = 'start' | 'middle' | 'end';

export interface IInfotipProps {
  active: boolean;
  backgroundColor?: string;
  color?: string;
  arrow?: boolean;
  direction: TipDirection;
  content: ReactNode;
  position: TipPosition;
  children: ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
}

export interface ITipProps {
  backgroundColor?: string;
  color?: string;
  arrow?: boolean;
  position: TipPosition;
}
