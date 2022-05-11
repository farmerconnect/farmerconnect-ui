import { ReactNode } from 'react';
import { DivPropsWithoutRef } from 'react-html-props';

export const tipDirectionList = ['bottom', 'left', 'right', 'top'] as const;
export type TipDirection = typeof tipDirectionList[number];

export const tipPositionList = ['start', 'middle', 'end'] as const;
export type TipPosition = typeof tipPositionList[number];

export interface IInfotipProps extends DivPropsWithoutRef {
  active: boolean;
  backgroundColor?: string;
  color?: string;
  arrow?: boolean;
  direction: TipDirection;
  content: ReactNode;
  position?: TipPosition;
}

export interface ITipProps {
  backgroundColor?: string;
  fontColor?: string;
  arrow?: boolean;
  position: TipPosition;
}
