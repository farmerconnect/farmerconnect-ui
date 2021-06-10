import * as React from 'react';

const Edit: React.FC<React.SVGProps<SVGSVGElement>> = ({ fill = 'black', ...props }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M18.2804 7.04757C18.5729 7.35092 18.5729 7.84093 18.2804 8.14428L16.908 9.56767L14.0957 6.65089L15.4681 5.2275C15.6082 5.08185 15.7985 5 15.9968 5C16.1952 5 16.3854 5.08185 16.5255 5.2275L18.2804 7.04757ZM5 18.6138L5 16.2493C5 16.1404 5.0375 16.0471 5.11249 15.9693L13.2945 7.4834L16.1068 10.4002L7.91732 18.8861C7.84982 18.9639 7.75233 19.0027 7.65483 19.0027H5.37498C5.16499 19.0027 5 18.8316 5 18.6138Z"
      fill={fill}
      clipRule="evenodd"
      fillRule="evenodd"
    />
  </svg>
);

export default Edit;
