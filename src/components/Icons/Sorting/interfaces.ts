import { SVGProps } from 'react';

export interface ISortingColors {
  activeColor?: string;
  defaultColor?: string;
  inactiveColor?: string;
}

export type SortingOrder = string | undefined;

export interface ISorting extends ISortingColors {
  order?: SortingOrder;
}

export type ISortingProps = Omit<SVGProps<SVGSVGElement>, 'ref'> & ISorting;
