import { SVGProps } from "react";

const Plus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.00015 11C6.44787 11 6.00015 11.4477 6.00015 12C6.00015 12.5523 6.44787 13 7.00015 13L11.0002 13L11.0002 17C11.0002 17.5523 11.4479 18 12.0002 18C12.5524 18 13.0002 17.5523 13.0002 17L13.0002 13H17.0002C17.5524 13 18.0002 12.5523 18.0002 12C18.0002 11.4477 17.5524 11 17.0002 11H13.0002L13.0002 7C13.0002 6.44772 12.5524 6 12.0002 6C11.4479 6 11.0002 6.44772 11.0002 7V11L7.00015 11Z"
      fill="param(fill) #00e394"
    />
  </svg>
);

export default Plus