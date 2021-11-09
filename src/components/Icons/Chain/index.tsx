import * as React from 'react';

const Chain: React.FC<React.SVGProps<SVGSVGElement>> = ({ fill = 'currentColor', ...props }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect
        x="3.19598"
        y="16.5445"
        width="8.51829"
        height="6.26981"
        rx="2.25"
        transform="rotate(-45 3.19598 16.5445)"
        fill="white"
        stroke={fill}
        strokeWidth="1.5"
      />
      <rect
        x="10.9232"
        y="8.81738"
        width="8.51829"
        height="6.27679"
        rx="2.25"
        transform="rotate(-45 10.9232 8.81738)"
        fill="white"
        stroke={fill}
        strokeWidth="1.5"
      />
      <rect
        x="7.92131"
        y="14.294"
        width="9"
        height="3"
        rx="1.5"
        transform="rotate(-45 7.92131 14.294)"
        fill={fill}
        stroke="white"
      />
    </svg>
  );
};

export default Chain;
