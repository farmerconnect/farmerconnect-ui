import * as React from 'react';

const Email: React.FC<React.SVGProps<SVGSVGElement>> = ({ fill = 'currentColor', ...props }) => (
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19.8286 6.3H4.82861C4.44201 6.3 4.12861 6.6134 4.12861 7V17C4.12861 17.3866 4.44201 17.7 4.82861 17.7H19.8286C20.2152 17.7 20.5286 17.3866 20.5286 17V7C20.5286 6.6134 20.2152 6.3 19.8286 6.3ZM4.82861 5C3.72404 5 2.82861 5.89543 2.82861 7V17C2.82861 18.1046 3.72404 19 4.82861 19H19.8286C20.9332 19 21.8286 18.1046 21.8286 17V7C21.8286 5.89543 20.9332 5 19.8286 5H4.82861Z"
      fill={fill}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.5687 12.8818L20.3833 5.52686L21.2743 6.47352L13.4596 13.8285C12.8243 14.4264 11.8333 14.4264 11.1979 13.8285L3.3833 6.47352L4.27427 5.52686L12.0889 12.8818C12.2237 13.0086 12.4339 13.0086 12.5687 12.8818Z"
      fill={fill}
    />
  </svg>
);

export default Email;
