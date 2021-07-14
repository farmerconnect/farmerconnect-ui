import { ReactNode } from 'react';

export type ICardProps = {
  type?: 'Default' | 'Main';
};

export type ICollapsedProps = {
  text?: {
    seeMore: string;
    seeLess: string;
  };
  children?: ReactNode;
};
