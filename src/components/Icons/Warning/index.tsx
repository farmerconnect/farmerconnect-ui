import * as React from 'react';

const Warning: React.FC<React.SVGProps<SVGSVGElement>> = ({ fill = 'currentColor', ...props }) => {
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="12.3286" cy="12" r="9.5" stroke={fill} />
      <rect x="11.3286" y="7" width="2" height="7" rx="1" fill={fill} />
      <rect x="11.3286" y="15" width="2" height="2" rx="1" fill={fill} />
    </svg>
  );
};

export default Warning;
