import * as React from 'react';

const ShowId: React.FC<React.SVGProps<SVGSVGElement>> = ({ fill = 'currentColor', ...props }) => (
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.4121 20.0002V13.7002H14.9601V20.0002H13.4121Z" fill={fill} />
    <path
      d="M16.7207 20.0002V13.7002H19.2857C19.7237 13.7002 20.1347 13.7842 20.5187 13.9522C20.9087 14.1142 21.2447 14.3362 21.5267 14.6182C21.8147 14.9002 22.0397 15.2362 22.2017 15.6262C22.3697 16.0102 22.4537 16.4242 22.4537 16.8682C22.4537 17.3002 22.3697 17.7082 22.2017 18.0922C22.0397 18.4762 21.8147 18.8092 21.5267 19.0912C21.2447 19.3732 20.9087 19.5952 20.5187 19.7572C20.1347 19.9192 19.7237 20.0002 19.2857 20.0002H16.7207ZM19.2857 15.0232H18.2687V18.6772H19.2857C19.5017 18.6772 19.7057 18.6322 19.8977 18.5422C20.0897 18.4462 20.2547 18.3172 20.3927 18.1552C20.5367 17.9932 20.6477 17.8012 20.7257 17.5792C20.8097 17.3572 20.8517 17.1202 20.8517 16.8682C20.8517 16.6102 20.8097 16.3702 20.7257 16.1482C20.6477 15.9202 20.5367 15.7252 20.3927 15.5632C20.2547 15.3952 20.0897 15.2632 19.8977 15.1672C19.7057 15.0712 19.5017 15.0232 19.2857 15.0232Z"
      fill={fill}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16.4979 12.7002C16.6729 12.3766 16.827 12.0389 16.9585 11.6894C15.8379 8.71045 13.0721 6.6001 9.8335 6.6001C6.59486 6.6001 3.82906 8.71045 2.7085 11.6894C3.82906 14.6683 6.59486 16.7787 9.8335 16.7787C10.7386 16.7787 11.6067 16.6139 12.4124 16.3113L12.4124 13.7413C11.8206 14.556 10.8854 15.0822 9.8335 15.0822C8.04577 15.0822 6.59486 13.5622 6.59486 11.6894C6.59486 9.81653 8.04577 8.29653 9.8335 8.29653C11.6212 8.29653 13.0721 9.81653 13.0721 11.6894C13.0721 12.0414 13.0209 12.3809 12.9258 12.7002H16.4979ZM14.9604 14.7103V13.7002H13.4124V15.8482C13.9734 15.5362 14.493 15.1531 14.9604 14.7103ZM7.89031 11.6894C7.89031 10.563 8.75827 9.65367 9.8335 9.65367C10.9087 9.65367 11.7767 10.563 11.7767 11.6894C11.7767 12.8158 10.9087 13.7251 9.8335 13.7251C8.75827 13.7251 7.89031 12.8158 7.89031 11.6894Z"
      fill={fill}
    />
  </svg>
);

export default ShowId;