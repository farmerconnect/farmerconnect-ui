import { SVGProps } from 'react';
import colors from '../../../styles/colors';

const Remove = ({ fill = colors.fc_red, ...props }: SVGProps<SVGSVGElement>) => (
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="12.3286" cy="12" r="10" fill={fill} />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16.1334 9.13807C16.3937 8.87772 16.3937 8.45561 16.1334 8.19526C15.873 7.93491 15.4509 7.93491 15.1905 8.19526L12.5164 10.8694L9.93065 8.28358C9.6703 8.02323 9.24819 8.02323 8.98784 8.28358C8.72749 8.54393 8.72749 8.96604 8.98784 9.22639L11.5736 11.8122L8.988 14.3978C8.72765 14.6582 8.72765 15.0803 8.988 15.3406C9.24835 15.601 9.67046 15.601 9.93081 15.3406L12.5164 12.755L15.1904 15.4289C15.4507 15.6893 15.8728 15.6893 16.1332 15.4289C16.3935 15.1686 16.3935 14.7465 16.1332 14.4861L13.4592 11.8122L16.1334 9.13807Z"
      fill="white"
    />
  </svg>
);

export default Remove;
