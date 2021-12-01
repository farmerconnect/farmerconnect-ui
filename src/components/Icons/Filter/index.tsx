import * as React from 'react';

const Filter: React.FC<React.SVGProps<SVGSVGElement>> = ({ fill = 'currentColor', ...props }) => (
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.32861 7C3.32861 7.55 3.77861 8 4.32861 8H20.3286C20.8786 8 21.3286 7.55 21.3286 7C21.3286 6.45 20.8786 6 20.3286 6H4.32861C3.77861 6 3.32861 6.45 3.32861 7ZM11.3286 18H13.3286C13.8786 18 14.3286 17.55 14.3286 17C14.3286 16.45 13.8786 16 13.3286 16H11.3286C10.7786 16 10.3286 16.45 10.3286 17C10.3286 17.55 10.7786 18 11.3286 18ZM17.3286 13H7.32861C6.77861 13 6.32861 12.55 6.32861 12C6.32861 11.45 6.77861 11 7.32861 11H17.3286C17.8786 11 18.3286 11.45 18.3286 12C18.3286 12.55 17.8786 13 17.3286 13Z"
      fill={fill}
    />
  </svg>
);

export default Filter;
