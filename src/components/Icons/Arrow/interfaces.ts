import { SVGProps } from 'react';
import { IIconWithDirection, IIconWithSizes } from '../interfaces';

export type IArrowProps = Omit<SVGProps<SVGSVGElement>, 'ref'> & IIconWithDirection & IIconWithSizes;
