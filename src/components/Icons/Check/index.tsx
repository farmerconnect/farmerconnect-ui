import * as React from "react";
import { IIconProps } from "./../IconList/interfaces";

const Check: React.FC<IIconProps> = ({ fill = "#00E394", ...props }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.0577 12.3485L5.95467 10.2455C5.84144 10.132 5.68771 10.0682 5.5274 10.0682C5.36708 10.0682 5.21336 10.132 5.10012 10.2455C4.86376 10.4819 4.86376 10.8637 5.10012 11.1L7.63346 13.6334C7.86982 13.8697 8.25164 13.8697 8.488 13.6334L14.9001 7.22126C15.1365 6.9849 15.1365 6.60308 14.9001 6.36672C14.7869 6.25323 14.6332 6.18945 14.4729 6.18945C14.3125 6.18945 14.1588 6.25323 14.0456 6.36672L8.0577 12.3485Z"
        fill={fill}
      />
      <circle cx="10" cy="10" r="9.5" stroke={fill} />
    </svg>
  );
};

export default Check;
