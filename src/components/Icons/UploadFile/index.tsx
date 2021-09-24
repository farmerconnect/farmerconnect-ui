import * as React from 'react';

const UploadFile: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <svg width="41" height="26" viewBox="0 0 41 26" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <mask id="path-1-inside-1" fill="white">
      <path fillRule="evenodd" clipRule="evenodd" d="M16.4401 0C12.6869 0 9.44782 2.20103 7.94315 5.38272C4.81484 5.60964 2.34737 8.21952 2.34737 11.4057C2.34737 11.4924 2.3492 11.5787 2.35281 11.6645C0.932719 12.6303 0 14.2594 0 16.1063C0 19.0709 2.40333 21.4743 5.368 21.4743H34.892C37.8567 21.4743 40.26 19.0709 40.26 16.1063C40.26 13.4363 38.3107 11.2216 35.7576 10.8077C34.7027 8.02064 32.0089 6.03906 28.8522 6.03906H28.5167C27.6477 6.03906 26.8138 6.18924 26.0395 6.46505C24.8088 2.71112 21.2766 0 17.1111 0H16.4401Z"/>
    </mask>
    <path d="M7.94315 5.38272L8.0155 6.3801L8.59763 6.33787L8.84715 5.81024L7.94315 5.38272ZM2.35281 11.6645L2.9152 12.4913L3.37537 12.1784L3.35193 11.6223L2.35281 11.6645ZM35.7576 10.8077L34.8224 11.1617L35.027 11.7023L35.5976 11.7948L35.7576 10.8077ZM26.0395 6.46505L25.0893 6.77659L25.4088 7.75126L26.3751 7.40707L26.0395 6.46505ZM8.84715 5.81024C10.1927 2.96493 13.088 1 16.4401 1V-1C12.2859 -1 8.70289 1.43713 7.03914 4.9552L8.84715 5.81024ZM3.34737 11.4057C3.34737 8.74755 5.40621 6.56937 8.0155 6.3801L7.8708 4.38534C4.22348 4.64991 1.34737 7.69148 1.34737 11.4057H3.34737ZM3.35193 11.6223C3.3489 11.5506 3.34737 11.4783 3.34737 11.4057H1.34737C1.34737 11.5065 1.34949 11.6068 1.3537 11.7066L3.35193 11.6223ZM1 16.1063C1 14.6044 1.75716 13.279 2.9152 12.4913L1.79042 10.8376C0.108275 11.9817 -1 13.9144 -1 16.1063H1ZM5.368 20.4743C2.95562 20.4743 1 18.5187 1 16.1063H-1C-1 19.6232 1.85105 22.4743 5.368 22.4743V20.4743ZM34.892 20.4743H5.368V22.4743H34.892V20.4743ZM39.26 16.1063C39.26 18.5187 37.3044 20.4743 34.892 20.4743V22.4743C38.4089 22.4743 41.26 19.6232 41.26 16.1063H39.26ZM35.5976 11.7948C37.6743 12.1315 39.26 13.9347 39.26 16.1063H41.26C41.26 12.938 38.9472 10.3117 35.9177 9.8206L35.5976 11.7948ZM28.8522 7.03906C31.5796 7.03906 33.9098 8.75063 34.8224 11.1617L36.6929 10.4537C35.4956 7.29064 32.4381 5.03906 28.8522 5.03906V7.03906ZM28.5167 7.03906H28.8522V5.03906H28.5167V7.03906ZM26.3751 7.40707C27.0432 7.16909 27.7637 7.03906 28.5167 7.03906V5.03906C27.5318 5.03906 26.5845 5.20939 25.704 5.52303L26.3751 7.40707ZM17.1111 1C20.8316 1 23.9892 3.42119 25.0893 6.77659L26.9897 6.15352C25.6284 2.00104 21.7215 -1 17.1111 -1V1ZM16.4401 1H17.1111V-1H16.4401V1Z" fill="#CEE9DD" mask="url(#path-1-inside-1)"/>
    <rect x="12.8203" y="19.1875" width="13.7055" height="4.56851" fill="white"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M16.4735 19.7617C16.6627 19.7617 16.8161 19.9151 16.8161 20.1044V22.9597H23.4405V20.1044C23.4405 19.9151 23.5939 19.7617 23.7831 19.7617C23.9723 19.7617 24.1258 19.9151 24.1258 20.1044V23.3023C24.1258 23.4915 23.9723 23.645 23.7831 23.645H16.4735C16.2843 23.645 16.1309 23.4915 16.1309 23.3023V20.1044C16.1309 19.9151 16.2843 19.7617 16.4735 19.7617Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M19.7959 21.13C19.7959 21.3193 19.9493 21.4727 20.1385 21.4727C20.3277 21.4727 20.4811 21.3193 20.4811 21.13L20.4811 16.832L21.4797 17.8306C21.615 17.9659 21.8336 17.9659 21.9688 17.8306C22.1041 17.6953 22.1041 17.4768 21.9688 17.3415L20.3766 15.7493C20.2413 15.614 20.0228 15.614 19.8875 15.7493L18.2953 17.3415C18.1635 17.4733 18.1635 17.6953 18.2988 17.8306C18.4341 17.9659 18.6526 17.9659 18.7879 17.8306L19.7959 16.8226L19.7959 21.13Z" fill="currentColor"/>
  </svg>
);

export default UploadFile;