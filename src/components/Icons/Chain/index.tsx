import * as React from 'react';

const Chain: React.FC<React.SVGProps<SVGSVGElement>> = ({ fill = 'currentColor', ...props }) => {
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect
        x="3.52453"
        y="16.5444"
        width="8.51829"
        height="6.26981"
        rx="2.25"
        transform="rotate(-45 3.52453 16.5444)"
        fill="white"
        stroke={fill}
        stroke-width="1.5"
      />
      <rect
        x="11.2516"
        y="8.81738"
        width="8.51829"
        height="6.27679"
        rx="2.25"
        transform="rotate(-45 11.2516 8.81738)"
        fill="white"
        stroke={fill}
        stroke-width="1.5"
      />
      <rect
        x="8.24992"
        y="14.2939"
        width="9"
        height="3"
        rx="1.5"
        transform="rotate(-45 8.24992 14.2939)"
        fill={fill}
        stroke="white"
      />
    </svg>
  );
};

export default Chain;
