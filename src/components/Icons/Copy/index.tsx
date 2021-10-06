import * as React from 'react';

const Copy: React.FC<React.SVGProps<SVGSVGElement>> = ({ fill = '#00E394', ...props }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <mask id="path-1-inside-1" fill="white">
        <rect x="3.5" y="7.5" width="13" height="13" rx="1" />
      </mask>
      <rect
        x="3.5"
        y="7.5"
        width="13"
        height="13"
        rx="1"
        stroke={fill}
        strokeWidth="3"
        fill="transparent"
        mask="url(#path-1-inside-1)"
      />
      <mask id="path-2-inside-2" fill="white">
        <rect x="7.5" y="3.5" width="13" height="13" rx="1" />
      </mask>
      <rect
        x="7.5"
        y="3.5"
        width="13"
        height="13"
        rx="1"
        fill="white"
        stroke={fill}
        strokeWidth="3"
        mask="url(#path-2-inside-2)"
      />
      <rect
        x="13.5833"
        y="6.64922"
        width="1.16667"
        height="6.5"
        rx="0.583333"
        fill={fill}
        stroke={fill}
        strokeWidth="0.1"
      />
      <rect
        x="17.4167"
        y="9.31719"
        width="1.16667"
        height="6.5"
        rx="0.583333"
        transform="rotate(90 17.4167 9.31719)"
        fill={fill}
        stroke={fill}
        strokeWidth="0.1"
      />
    </svg>
  );
};

export default Copy;
