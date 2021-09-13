import { ReactNode } from 'react';

export interface IInfotipProps {
  active: boolean;
  backgroundColor?: string;
  color?: string;
  arrow?: boolean;
  direction: 'bottom' | 'left' | 'right' | 'top';
  content: ReactNode;
  position: 'start' | 'middle' | 'end';
  children: ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
}

export interface ITipProps {
  backgroundColor?: string;
  color?: string;
  arrow?: boolean;
  position: 'start' | 'middle' | 'end';
}