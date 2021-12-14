import * as React from 'react';

const Reload: React.FC<React.SVGProps<SVGSVGElement>> = ({ fill = 'currentColor', ...props }) => {
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12.084 18.9193C11.7228 18.9094 11.3649 18.8707 11.0135 18.8046C9.83488 18.5827 8.72907 18.0516 7.81366 17.2571C6.62535 16.2258 5.83142 14.8143 5.56714 13.2632C5.30286 11.712 5.58458 10.1173 6.3643 8.7506C7.14402 7.38391 8.3735 6.32987 9.84325 5.76806C11.313 5.20625 12.9321 5.17143 14.4246 5.66955C15.9172 6.16766 17.1908 7.16788 18.0286 8.49978C18.6789 9.53376 19.0353 10.718 19.0699 11.9263"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M17.0961 11.1251L19.1613 12.8242L20.9986 10.7565"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Reload;
