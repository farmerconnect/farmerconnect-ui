import React from 'react';

const Error: React.FC<React.SVGProps<SVGSVGElement>> = ({ fill = 'currentColor', ...props }) => (
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="12.3286" cy="12" r="9.5" stroke={fill} />
    <rect x="8.2627" y="15.0054" width="10" height="1.5" rx="0.75" transform="rotate(-45 8.2627 15.0054)" fill={fill} />
    <rect
      x="9.32324"
      y="7.93408"
      width="10"
      height="1.5"
      rx="0.75"
      transform="rotate(45 9.32324 7.93408)"
      fill={fill}
    />
  </svg>
);

export default Error;
