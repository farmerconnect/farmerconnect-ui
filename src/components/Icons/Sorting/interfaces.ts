import { SVGProps } from 'react';

export interface ISortingColors {
  activeColor?: string;
  defaultColor?: string;
  inactiveColor?: string;
}

export type SortingOrder = 'asc' | 'desc' | any;

export interface ISorting extends ISortingColors {
  order?: SortingOrder;
}

export type ISortingProps = Omit<SVGProps<SVGSVGElement>, 'ref'> & ISorting;
