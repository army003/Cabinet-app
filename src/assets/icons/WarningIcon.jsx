import React from 'react';
import { useContext } from 'react';

import { ThemeContext } from '@/contexts/theme-context';

const WarningIcon = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <svg width='48' height='41' viewBox='0 0 48 41' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M46.8855 33.3535L29.0289 3.45351C28.5561 2.66386 27.8579 2.0047 27.0078 1.54542C26.1576 1.08615 25.187 0.84375 24.198 0.84375C23.2091 0.84375 22.2385 1.08615 21.3883 1.54542C20.5382 2.0047 19.84 2.66386 19.3672 3.45351L1.49221 33.3535C1.02435 34.1169 0.784768 34.9785 0.797346 35.8524C0.809924 36.7262 1.07422 37.5818 1.56389 38.3338C2.05356 39.0859 2.75151 39.7081 3.58815 40.1385C4.42479 40.5689 5.37091 40.7925 6.3322 40.7868H42.0455C42.9989 40.7876 43.9362 40.5631 44.7654 40.1353C45.5946 39.7075 46.2871 39.091 46.7752 38.3465C47.2633 37.6019 47.5301 36.7548 47.5494 35.8883C47.5688 35.0217 47.34 34.1654 46.8855 33.4035V33.3535ZM21.4572 12.0202C21.4572 11.3571 21.7469 10.7212 22.2627 10.2524C22.7784 9.78356 23.4779 9.52017 24.2072 9.52017C24.9365 9.52017 25.636 9.78356 26.1517 10.2524C26.6675 10.7212 26.9572 11.3571 26.9572 12.0202V23.5035C26.9572 24.1665 26.6675 24.8024 26.1517 25.2713C25.636 25.7401 24.9365 26.0035 24.2072 26.0035C23.4779 26.0035 22.7784 25.7401 22.2627 25.2713C21.7469 24.8024 21.4572 24.1665 21.4572 23.5035V12.0202ZM24.2805 34.5368C23.6569 34.5368 23.0472 34.3687 22.5286 34.0537C22.0101 33.7387 21.6059 33.291 21.3672 32.7672C21.1286 32.2434 21.0661 31.667 21.1878 31.1109C21.3095 30.5548 21.6098 30.044 22.0508 29.6431C22.4918 29.2422 23.0537 28.9692 23.6653 28.8586C24.277 28.748 24.9111 28.8047 25.4873 29.0217C26.0635 29.2387 26.5559 29.6061 26.9024 30.0775C27.2489 30.549 27.4339 31.1032 27.4339 31.6702C27.4339 32.4305 27.1016 33.1596 26.5103 33.6972C25.9189 34.2348 25.1168 34.5368 24.2805 34.5368Z'
        fill={theme === 'dark' ? '#B7BBBD' : '#8E8E93'}
      />
    </svg>
  );
};
export default WarningIcon;
