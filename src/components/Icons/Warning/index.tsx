import * as React from "react";

const Warning: React.FC<React.SVGProps<SVGSVGElement>> = ({
  fill = "#FB2E4C",
  ...props
}) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="10" cy="10" r="9.5" stroke={fill} />
      <rect x="9" y="5" width="2" height="7" rx="1" fill={fill} />
      <rect x="9" y="13" width="2" height="2" rx="1" fill={fill} />
    </svg>
  );
};

export default Warning;
