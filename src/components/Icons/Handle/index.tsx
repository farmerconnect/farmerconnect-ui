import React from 'react';

const Handle: React.FC<React.SVGProps<SVGSVGElement>> = ({ fill = 'currentColor', ...props }) => (
  <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="1.5" cy="1.5" r="1.5" fill={fill} />
    <circle cx="6.5" cy="1.5" r="1.5" fill={fill} />
    <circle cx="1.5" cy="6.5" r="1.5" fill={fill} />
    <circle cx="6.5" cy="6.5" r="1.5" fill={fill} />
    <circle cx="1.5" cy="11.5" r="1.5" fill={fill} />
    <circle cx="6.5" cy="11.5" r="1.5" fill={fill} />
  </svg>
);

export default Handle;
