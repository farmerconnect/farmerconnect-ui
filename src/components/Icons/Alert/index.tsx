import * as React from 'react';

const Alert: React.FC<React.SVGProps<SVGSVGElement>> = ({ fill = 'currentColor', ...props }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="11.5786" y="8.07715" width="1.5" height="7.38461" rx="0.75" fill={fill} />
      <rect x="11.5786" y="16.3848" width="1.5" height="1.5" rx="0.75" fill={fill} />
      <path
        d="M10.5966 3.5C11.3664 2.16667 13.2909 2.16667 14.0607 3.5L22.0714 17.375C22.8412 18.7083 21.8789 20.375 20.3393 20.375H4.31788C2.77828 20.375 1.81603 18.7083 2.58583 17.375L10.5966 3.5Z"
        stroke={fill}
      />
    </svg>
  );
};

export default Alert;
