import * as React from 'react';

const Duplicate: React.FC<React.SVGProps<SVGSVGElement>> = ({ fill = 'currentColor', ...props }) => {
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <mask id="path-1-inside-1_742_12336" fill="white">
        <rect x="3.82861" y="7.5" width="13" height="13" rx="1" />
      </mask>
      <rect
        x="3.82861"
        y="7.5"
        width="13"
        height="13"
        rx="1"
        stroke={fill}
        stroke-width="3"
        mask="url(#path-1-inside-1_742_12336)"
      />
      <mask id="path-2-inside-2_742_12336" fill="white">
        <rect x="7.82861" y="3.5" width="13" height="13" rx="1" />
      </mask>
      <rect
        x="7.82861"
        y="3.5"
        width="13"
        height="13"
        rx="1"
        fill="white"
        stroke={fill}
        stroke-width="3"
        mask="url(#path-2-inside-2_742_12336)"
      />
      <rect
        x="13.9119"
        y="6.6502"
        width="1.16667"
        height="6.5"
        rx="0.583333"
        fill={fill}
        stroke={fill}
        stroke-width="0.1"
      />
      <rect
        x="17.7453"
        y="9.3167"
        width="1.16667"
        height="6.5"
        rx="0.583333"
        transform="rotate(90 17.7453 9.3167)"
        fill={fill}
        stroke={fill}
        stroke-width="0.1"
      />
    </svg>
  );
};

export default Duplicate;
