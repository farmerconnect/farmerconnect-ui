import * as React from 'react';

const Options: React.FC<React.SVGProps<SVGSVGElement>> = ({ fill = 'currentColor', ...props }) => (
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="11.8286" cy="6.5" r="1.5" fill={fill} />
    <circle cx="11.8286" cy="11.5" r="1.5" fill={fill} />
    <circle cx="11.8286" cy="16.5" r="1.5" fill={fill} />
  </svg>
);

export default Options;
