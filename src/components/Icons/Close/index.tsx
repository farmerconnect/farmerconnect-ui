import * as React from "react";
import { IIconProps } from "./../IconList/interfaces";

const Close: React.FC<IIconProps> = ({ fill = "#6D6D6D", ...props }) => {
  return (
    <svg
      width="13"
      height="14"
      viewBox="0 0 13 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="2.28223"
        y="1.00012"
        width="15.1576"
        height="2"
        rx="1"
        transform="rotate(45 2.28223 1.00012)"
        fill={fill}
      />
      <rect
        x="13"
        y="2.28198"
        width="15.1576"
        height="2"
        rx="1"
        transform="rotate(135 13 2.28198)"
        fill={fill}
      />
    </svg>
  );
};

export default Close;
