import React from 'react';

const Error: React.FC<React.SVGProps<SVGSVGElement>> = ({ fill = 'currentColor', ...props }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="10" cy="10" r="9.5" stroke={fill} />
    <rect
      x="5.93408"
      y="13.0052"
      width="10"
      height="1.5"
      rx="0.75"
      transform="rotate(-45 5.93408 13.0052)"
      fill={fill}
    />
    <rect
      x="6.99487"
      y="5.93408"
      width="10"
      height="1.5"
      rx="0.75"
      transform="rotate(45 6.99487 5.93408)"
      fill={fill}
    />
  </svg>
);

export default Error;
