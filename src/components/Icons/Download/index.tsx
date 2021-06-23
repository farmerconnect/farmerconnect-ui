import * as React from 'react';

const Download: React.FC<React.SVGProps<SVGSVGElement>> = ({ fill = '#000', ...props }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 12.25C4.41421 12.25 4.75 12.5858 4.75 13V19.25H19.25V13C19.25 12.5858 19.5858 12.25 20 12.25C20.4142 12.25 20.75 12.5858 20.75 13V20C20.75 20.4142 20.4142 20.75 20 20.75H4C3.58579 20.75 3.25 20.4142 3.25 20V13C3.25 12.5858 3.58579 12.25 4 12.25Z"
      fill='param(fill) #000'
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.75 4C12.75 3.58579 12.4143 3.25 12 3.25C11.5858 3.25 11.25 3.58579 11.25 4L11.25 13.4079L9.0642 11.2221C8.76807 10.926 8.28971 10.926 7.99358 11.2221C7.69745 11.5182 7.69745 11.9966 7.99358 12.2927L11.4788 15.7779C11.7749 16.074 12.2533 16.074 12.5494 15.7779L16.0346 12.2927C16.3231 12.0042 16.3231 11.5182 16.027 11.2221C15.7309 10.926 15.2525 10.926 14.9564 11.2221L12.75 13.4284L12.75 4Z"
      fill='param(fill) #000'
    />
  </svg>
);

export default Download;