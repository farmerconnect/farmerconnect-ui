import React from 'react';
import { IArrowProps } from './interfaces';
import { StyledArrow } from './styles';

const Arrow: React.FC<IArrowProps> = ({ fill = '#5B5B5B', direction = 'up', ...props }) => (
  <StyledArrow
    fill="none"
    width="8"
    xmlns="http://www.w3.org/2000/svg"
    height="5"
    viewBox="0 0 8 5"
    direction={direction}
    {...props}
  >
    <path
      d="M0.474162 4.19563C0.734162 4.45562 1.15416 4.45563 1.41416 4.19563L4.00083 1.60896L6.5875 4.19563C6.8475 4.45563 7.2675 4.45563 7.5275 4.19563C7.7875 3.93563 7.7875 3.51563 7.5275 3.25563L4.4675 0.195625C4.2075 -0.0643749 3.7875 -0.0643749 3.5275 0.195625L0.467495 3.25563C0.214162 3.50896 0.214162 3.93563 0.474162 4.19563Z"
      fill={fill}
    />
  </StyledArrow>
);

export default Arrow;
