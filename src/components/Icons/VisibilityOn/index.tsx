import * as React from 'react';

const VisibilityOn: React.FC<React.SVGProps<SVGSVGElement>> = ({ fill = 'currentColor', ...props }) => {
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12.3286 6C8.2377 6 4.74407 8.488 3.32861 12C4.74407 15.512 8.2377 18 12.3286 18C16.4195 18 19.9132 15.512 21.3286 12C19.9132 8.488 16.4195 6 12.3286 6ZM12.3286 16C10.0704 16 8.2377 14.208 8.2377 12C8.2377 9.792 10.0704 8 12.3286 8C14.5868 8 16.4195 9.792 16.4195 12C16.4195 14.208 14.5868 16 12.3286 16ZM12.3286 9.6C10.9704 9.6 9.87407 10.672 9.87407 12C9.87407 13.328 10.9704 14.4 12.3286 14.4C13.6868 14.4 14.7832 13.328 14.7832 12C14.7832 10.672 13.6868 9.6 12.3286 9.6Z"
        fill={fill}
      />
    </svg>
  );
};

export default VisibilityOn;
