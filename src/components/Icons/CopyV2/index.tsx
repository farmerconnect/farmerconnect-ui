import * as React from 'react';

const CopyV2: React.FC<React.SVGProps<SVGSVGElement>> = ({ fill = 'currentColor', ...props }) => {
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.91162 4C8.91162 3.0335 9.69512 2.25 10.6616 2.25L19.3283 2.25C20.2948 2.25 21.0783 3.0335 21.0783 4L21.0783 16.4C21.0783 17.3665 20.2948 18.15 19.3283 18.15L15.7453 18.15V20C15.7453 20.9664 14.9618 21.75 13.9953 21.75L5.32861 21.75C4.36212 21.75 3.57861 20.9664 3.57861 20L3.57861 6.69995C3.57861 5.73345 4.36211 4.94995 5.32861 4.94995L8.91162 4.94995V4ZM10.4116 4.94995H13.9953C14.9618 4.94995 15.7453 5.73345 15.7453 6.69995L15.7453 16.65L19.3283 16.65C19.4664 16.65 19.5783 16.5381 19.5783 16.4L19.5783 4C19.5783 3.86193 19.4664 3.75 19.3283 3.75L10.6616 3.75C10.5236 3.75 10.4116 3.86193 10.4116 4V4.94995ZM5.07861 6.69995C5.07861 6.56188 5.19054 6.44995 5.32861 6.44995L13.9953 6.44995C14.1334 6.44995 14.2453 6.56188 14.2453 6.69995L14.2453 20C14.2453 20.138 14.1334 20.25 13.9953 20.25L5.32861 20.25C5.19054 20.25 5.07861 20.138 5.07861 20L5.07861 6.69995Z"
        fill={fill}
      />
    </svg>
  );
};

export default CopyV2;