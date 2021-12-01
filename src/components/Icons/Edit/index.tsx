import * as React from 'react';

const Edit: React.FC<React.SVGProps<SVGSVGElement>> = ({ fill = 'currentColor', ...props }) => (
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M18.6091 7.04757C18.9015 7.35092 18.9015 7.84093 18.6091 8.14428L17.2366 9.56767L14.4243 6.65089L15.7967 5.2275C15.9368 5.08185 16.1271 5 16.3254 5C16.5238 5 16.714 5.08185 16.8542 5.2275L18.6091 7.04757ZM5.32861 18.6138V16.2493C5.32861 16.1404 5.36611 16.0471 5.44111 15.9693L13.6231 7.4834L16.4354 10.4002L8.24593 18.8861C8.17843 18.9639 8.08094 19.0027 7.98345 19.0027H5.70359C5.4936 19.0027 5.32861 18.8316 5.32861 18.6138Z"
      fill={fill}
    />
  </svg>
);

export default Edit;
