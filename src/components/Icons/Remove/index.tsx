import { SVGProps } from "react";

const Remove = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="10" fill="param(fill)#FB2E4C" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.8047 9.13807C16.0651 8.87772 16.0651 8.45561 15.8047 8.19526C15.5444 7.93491 15.1223 7.93491 14.8619 8.19526L12.1878 10.8694L9.60204 8.28358C9.34169 8.02323 8.91958 8.02323 8.65923 8.28358C8.39888 8.54393 8.39888 8.96604 8.65923 9.22639L11.245 11.8122L8.65939 14.3978C8.39904 14.6582 8.39904 15.0803 8.65939 15.3406C8.91974 15.601 9.34185 15.601 9.6022 15.3406L12.1878 12.755L14.8618 15.4289C15.1221 15.6893 15.5442 15.6893 15.8046 15.4289C16.0649 15.1686 16.0649 14.7465 15.8046 14.4861L13.1306 11.8122L15.8047 9.13807Z"
      fill="white"
    />
  </svg>
);

export default Remove