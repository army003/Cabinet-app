import 'twin.macro';

import React from 'react';

import DeleteIcon from '@/assets/icons/DeleteIcon';
import FileIcon2 from '@/assets/icons/FileIcon2';

import { Caption } from '.';

const File = ({ file, onDelete }) => {
  return (
    <div tw='flex items-center justify-between bg-primary rounded-2xl p-3'>
      <div tw='flex items-center space-x-2'>
        <FileIcon2 />
        <Caption text='Выписка из банка' />
      </div>
      <div tw='cursor-pointer' onClick={onDelete} onKeyDown={onDelete} aria-hidden='true'>
        <DeleteIcon />
      </div>
    </div>
  );
};
export default File;
