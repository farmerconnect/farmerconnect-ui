import * as React from 'react';

const Close: React.FC<React.SVGProps<SVGSVGElement>> = ({ fill = 'currentColor', ...props }) => {
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="7.61035" y="6" width="15.1576" height="2" rx="1" transform="rotate(45 7.61035 6)" fill={fill} />
      <rect
        x="18.3286"
        y="7.28174"
        width="15.1576"
        height="2"
        rx="1"
        transform="rotate(135 18.3286 7.28174)"
        fill={fill}
      />
    </svg>
  );
};

export default Close;
