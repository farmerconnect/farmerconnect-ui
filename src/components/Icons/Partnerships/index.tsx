import * as React from 'react';

const Partnerships: React.FC<React.SVGProps<SVGSVGElement>> = ({ fill = 'currentColor', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" fill={fill} {...props}>
    <path
      d="M375.25,197.4,302.6,124.76a74.39,74.39,0,0,0-105.21,0L124.75,197.4a74.38,74.38,0,0,0,0,105.2l72.64,72.64A73.87,73.87,0,0,0,250,397h0a73.86,73.86,0,0,0,52.6-21.79l72.65-72.64a74.38,74.38,0,0,0,0-105.2ZM250,379.81h0a56.78,56.78,0,0,1-40.41-16.75l-72.64-72.64a57.17,57.17,0,0,1,0-80.84l72.64-72.64A56.81,56.81,0,0,1,250,120.19a57.39,57.39,0,0,1,13.64,1.7v78.49a52.09,52.09,0,0,0-26.28-.2,51.07,51.07,0,0,0-37.57,39.19,51.57,51.57,0,0,0,50.42,62.26,51.08,51.08,0,0,0,13.43-1.79v78.27A57.39,57.39,0,0,1,250,379.81Zm113.07-89.39-72.65,72.64a57.28,57.28,0,0,1-9.56,7.68V297.4A15.21,15.21,0,0,0,274.55,285a15.63,15.63,0,0,0-13.92-2.21,33.73,33.73,0,0,1-10.42,1.64,34.35,34.35,0,0,1-33.54-41.6,33.77,33.77,0,0,1,24.84-25.9,34.38,34.38,0,0,1,19.07.53,15.67,15.67,0,0,0,14-2.21,15.21,15.21,0,0,0,6.3-12.42V129.26a57.28,57.28,0,0,1,9.56,7.68l72.65,72.64a57.17,57.17,0,0,1,0,80.84Z"
      fill={fill}
    />
  </svg>
);

export default Partnerships;
