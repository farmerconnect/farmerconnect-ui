import * as React from 'react';
import { IIconWithSizes } from '../interfaces';
import { SIZE_VARIANTS } from './constants';

interface IMagnifyingGlass extends IIconWithSizes, React.SVGProps<SVGSVGElement> {}

const MagnifyingGlass: React.FC<IMagnifyingGlass> = ({ size = 'regular', fill = 'currentColor', ...props }) => {
  const { width, height, path } = SIZE_VARIANTS[size] || SIZE_VARIANTS.regular;

  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d={path} fill={fill} />
    </svg>
  );
};

export default MagnifyingGlass;
