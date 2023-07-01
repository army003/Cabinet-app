import * as React from 'react';

function TrashIcon(props) {
  return (
    <svg width={20} height={21} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9 2.5a1 1 0 00-.894.553L7.382 4.5H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2v-10a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2.5H9zm-2 6a1 1 0 012 0v6a1 1 0 11-2 0v-6zm5-1a1 1 0 00-1 1v6a1 1 0 002 0v-6a1 1 0 00-1-1z'
        fill='#ffffff'
        fillOpacity={0.5}
      />
    </svg>
  );
}

export default TrashIcon;
