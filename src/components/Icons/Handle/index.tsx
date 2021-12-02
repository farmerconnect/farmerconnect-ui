import React from 'react';

const Handle: React.FC<React.SVGProps<SVGSVGElement>> = ({ fill = 'currentColor', ...props }) => (
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="9.82861" cy="7.5" r="1.5" fill={fill} />
    <circle cx="14.8286" cy="7.5" r="1.5" fill={fill} />
    <circle cx="9.82861" cy="12.5" r="1.5" fill={fill} />
    <circle cx="14.8286" cy="12.5" r="1.5" fill={fill} />
    <circle cx="9.82861" cy="17.5" r="1.5" fill={fill} />
    <circle cx="14.8286" cy="17.5" r="1.5" fill={fill} />
  </svg>
);

export default Handle;
