import * as React from 'react';

const Information: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='none' {...props}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="13" y="17" width="2" height="7" rx="1" transform="rotate(-180 13 17)" fill="currentColor" stroke='none' />
    <rect x="13" y="9" width="2" height="2" rx="1" transform="rotate(-180 13 9)" fill="currentColor" stroke='none' />
  </svg>
);

export default Information;
