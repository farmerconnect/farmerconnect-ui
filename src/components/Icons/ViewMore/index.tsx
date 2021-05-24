import * as React from 'react';

const ViewMore1: React.FC<React.SVGProps<SVGSVGElement>> = ({ fill = '#FB2E4C', ...props }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g opacity="0.6">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.9975 5H18.9975V3H20.9975V5ZM5 8.99996H3V6.99996H5V8.99996ZM3 13H5V11H3V13ZM21 17H19V15H21V17ZM21 19H19V21H21V19ZM20.9975 13H18.9975V11H20.9975V13ZM3 17H5V15H3V17ZM18.9975 8.99996H20.9975V6.99996H18.9975V8.99996ZM3 5H5V3H3V5ZM9 5H7V3H9V5ZM11.0025 5H13.0025V3H11.0025V5ZM17.0025 5H15.0025V3H17.0025V5ZM17 19V19V21H15V19V19H17ZM13 21H11V19H13V21ZM7 21H9V19H7V21ZM5 21H3V19H5V21Z"
          fill={fill}
        />
        <rect x="11" y="8" width="2" height="8" fill={fill} />
        <rect x="16" y="11" width="2" height="8" transform="rotate(90 16 11)" fill={fill} />
      </g>
    </svg>
  );
};

export default ViewMore1;
