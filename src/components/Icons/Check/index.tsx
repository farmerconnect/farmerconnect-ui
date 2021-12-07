import * as React from 'react';

const Check: React.FC<React.SVGProps<SVGSVGElement>> = ({ fill = 'currentColor', ...props }) => {
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="12.3286" cy="12" r="9.5" stroke={fill} />
      <path
        d="M10.3863 14.2425L8.33638 12.1925C8.20907 12.0649 8.03624 11.9932 7.85601 11.9932C7.67578 11.9932 7.50295 12.0649 7.37564 12.1925C7.11005 12.4582 7.11007 12.8875 7.3757 13.1531L9.90904 15.6864C10.1747 15.9521 10.604 15.9521 10.8696 15.6864L17.2818 9.2743C17.5474 9.00866 17.5474 8.5794 17.2818 8.31374C17.1545 8.18616 16.9817 8.11445 16.8015 8.11445C16.6212 8.11445 16.4484 8.18616 16.3211 8.31374L10.3863 14.2425Z"
        fill={fill}
        stroke={fill}
        strokeWidth="0.15"
      />
    </svg>
  );
};

export default Check;
