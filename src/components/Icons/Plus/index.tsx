import { SVGProps } from 'react';

const Plus = ({fill = 'currentColor', ...props}: SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.32876 11C6.77648 11 6.32876 11.4477 6.32876 12C6.32876 12.5523 6.77648 13 7.32876 13L11.3288 13L11.3288 17C11.3288 17.5523 11.7765 18 12.3288 18C12.881 18 13.3288 17.5523 13.3288 17V13H17.3288C17.881 13 18.3288 12.5523 18.3288 12C18.3288 11.4477 17.881 11 17.3288 11H13.3288L13.3288 7C13.3288 6.44772 12.881 6 12.3288 6C11.7765 6 11.3288 6.44772 11.3288 7V11L7.32876 11Z"
      fill={fill}
    />
  </svg>
);

export default Plus;
