import { ReactNode } from 'react';

export interface ITooltipProps {
  backgroundColor?: string;
  textColor?: string;
  arrowColor?: string;
  direction: 'bottom' | 'left' | 'right' | 'top';
  effect: 'float' | 'solid';
  className?: string;
  content: ReactNode;
  id: string;
  event?: string;
  offset?: any;
}
