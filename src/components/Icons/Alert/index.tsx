import * as React from 'react';

const Check: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="104" height="104" viewBox="0 0 104 104" fill="none">
      <rect x="49" y="35" width="6" height="32" rx="3" fill={props.fill || '#AE8800'} />
      <rect x="49" y="71" width="6" height="6" rx="3" fill={props.fill || '#AE8800'} />
      <path
        d="M45.0718 14C48.151 8.66666 55.849 8.66667 58.9282 14L95.3013 77C98.3805 82.3333 94.5315 89 88.3731 89H15.6269C9.46853 89 5.61953 82.3333 8.69873 77L45.0718 14Z"
        stroke={props.fill || '#AE8800'}
        strokeWidth="3.5"
      />
    </svg>
  );
};

export default Check;
