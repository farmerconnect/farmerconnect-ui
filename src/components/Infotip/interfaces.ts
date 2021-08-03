import { ReactNode } from 'react';

export interface IInfotipProps {
  active: boolean;
  backgroundColor?: string;
  color?: string;
  arrow?: boolean;
  direction: 'bottom' | 'left' | 'right' | 'top';
  content: ReactNode;
  children: ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
}
