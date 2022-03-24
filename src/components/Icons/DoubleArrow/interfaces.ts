import { SVGProps } from 'react';
import { IIconWithDirection } from '../interfaces';

export type IDoubleArrowProps = Omit<SVGProps<SVGSVGElement>, 'ref'> & IIconWithDirection;
