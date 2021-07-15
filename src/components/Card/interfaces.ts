import { HTMLAttributes } from 'react';
import { HTMLMotionProps } from 'framer-motion';

export interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  type?: 'Default' | 'Main';
}

export interface ICollapsedProps extends HTMLMotionProps<'div'> {
  text?: {
    seeMore: string;
    seeLess: string;
  };
}
