import * as React from 'react';

const Information: React.FC<React.SVGProps<SVGSVGElement>> = ({ fill = 'currentColor', ...props }) => (
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    {/* using fill for stroke because we always want the same colors */}
    <circle cx="12.3286" cy="12" r="9" stroke={fill} stroke-width="2" />
    <rect x="13.3286" y="17" width="2" height="7" rx="1" transform="rotate(-180 13.3286 17)" fill={fill} />
    <rect x="13.3286" y="9" width="2" height="2" rx="1" transform="rotate(-180 13.3286 9)" fill={fill} />
  </svg>
);

export default Information;
