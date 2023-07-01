import * as React from 'react';

function BurgerMenu(props) {
  return (
    <svg fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M4 7h16M3.998 12h15.996M4 17h15.994' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
}

export default BurgerMenu;
