import * as React from 'react';

const Calendar: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.0001 1.59996L10.6667 1.59996C11.4 1.59996 12 2.20745 12 2.94993L12 12.3997C12 13.1422 11.4 13.7496 10.6667 13.7496L1.33362 13.7496C0.60031 13.7496 0.000326157 13.1422 0.000326157 12.3997L0.000326157 2.94993C0.000326157 2.20745 0.593643 1.59996 1.33362 1.59996L2.00027 1.59996V0.924982C2.00027 0.553742 2.30026 0.25 2.66692 0.25C3.03358 0.25 3.33357 0.553742 3.33357 0.924982V1.59996L8.66676 1.59996V0.924982C8.66676 0.553742 8.96675 0.25 9.33341 0.25C9.70006 0.25 10.0001 0.553742 10.0001 0.924982V1.59996ZM2.00008 4.5C1.4478 4.5 1.00008 4.94772 1.00008 5.5L1.00008 11.5C1.00008 12.0523 1.4478 12.5 2.00008 12.5L10.0001 12.5C10.5524 12.5 11.0001 12.0523 11.0001 11.5L11.0001 5.5C11.0001 4.94772 10.5524 4.5 10.0001 4.5L2.00008 4.5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Calendar;