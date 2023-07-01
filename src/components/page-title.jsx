import 'twin.macro';

import { NavLink } from 'react-router-dom';

import BackIcon from '@/assets/icons/BackIcon';

import { BigTitle } from './big-title';

export function PageTitle({ pathToBack, text }) {
  return (
    <div tw='flex items-center gap-6 my-8'>
      <NavLink tw='flex items-center justify-center' to={pathToBack}>
        <BackIcon width='25' height='25' />
      </NavLink>
      <BigTitle text={text} />
    </div>
  );
}
