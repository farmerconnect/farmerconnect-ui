import { HTMLProps } from 'react';

export type ICardProps = {
  type?: 'Default' | 'Main';
} & HTMLProps<HTMLDivElement>;

export type ICollapsedProps = {
  text?: {
    seeMore: string;
    seeLess: string;
  };
} & HTMLProps<HTMLDivElement>;
