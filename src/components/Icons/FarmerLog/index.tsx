import * as React from "react";

const FarmerLog: React.FC<React.SVGProps<SVGSVGElement>> = ({
  fill = "black",
  ...props
}) => (
  <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 500 500"
    fill={fill}
    {...props}
  >
    <path
      d="M427.13,164.86a9.12,9.12,0,0,0-6.94-5.84,7.78,7.78,0,0,0-1.06-.11c-55.22-2.32-95.79,6.06-120.55,24.88-20.81,15.83-25.85,35.14-26.41,48.56-.51,12.34,2.69,23.61,9.3,32.85-4.54,7.87-11.57,21.56-12,31.35a9,9,0,0,0,7.42,9.1,8.53,8.53,0,0,0,1.24.11h.17a9,9,0,0,0,8.86-8.48c.14-3.19,2.5-10.2,7.44-19.47a64.8,64.8,0,0,0,26.28,9.94,79.1,79.1,0,0,0,9.22.89c45.85,1.88,57.2-41.38,62.7-62.19,7-26.67,20.77-41.9,31.95-52.18A9.08,9.08,0,0,0,427.13,164.86Zm-51.44,57.06c-6.74,25.48-15.78,50.17-44.82,49a64.53,64.53,0,0,1-7.13-.69,46.59,46.59,0,0,1-19.86-7.66c9.29-13.52,29.4-38.59,59.06-53.64a8.86,8.86,0,0,0-8.28-15.65c-29.83,15.31-51.16,40.05-62.19,55.09a35.69,35.69,0,0,1-2.6-15.31c.72-17.2,13-56,108.6-56.84C390.21,186.41,381.25,200.9,375.69,221.92Z"
      fill={fill}
    />
    <path
      d="M383,301.36a8.62,8.62,0,0,0-8.61,8.62V358.8H260.71A296,296,0,0,1,334.38,343l8.92-.74a8.61,8.61,0,1,0-1.43-17.16l-8.93.74A313,313,0,0,0,240.6,348V166.39l8.2-3.4a285.86,285.86,0,0,1,86.83-21.17l7.67-.64A8.62,8.62,0,1,0,341.86,124l-7.66.65a303.09,303.09,0,0,0-92,22.43L232,151.31l-10.16-4.22a303.42,303.42,0,0,0-92-22.43l-7.67-.65a8.62,8.62,0,0,0-9.33,8.59v201a8.61,8.61,0,0,0,7.9,8.58l8.92.74a295.56,295.56,0,0,1,73.66,15.84H89.64V157.4a8.62,8.62,0,0,0-17.23,0v210A8.62,8.62,0,0,0,81,376H383a8.62,8.62,0,0,0,8.62-8.62V310A8.62,8.62,0,0,0,383,301.36ZM130,325.71V142a286.31,286.31,0,0,1,85.19,21l8.18,3.4V348A313,313,0,0,0,131,325.8Z"
      fill={fill}
    />
  </svg>
);

export default FarmerLog;
