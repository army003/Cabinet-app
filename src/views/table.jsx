import 'twin.macro';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { pathnames } from '@/app/utils/constants';

export default function Table({ tableColumns = [], tableData = [], withActions = true, refetch = Function.prototype }) {
  const [id, setId] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickRow = row => {
    navigate(`${pathnames.main}/${row.id}`, { state: { client_info: row } });
  };

  return (
    <div tw='overflow-auto rounded-2xl sm:max-h-[calc(100vh - 280px)] '>
      <table tw='w-full divide-y divide-gray-200 text-center z-0 bg-secondary'>
        <thead tw='bg-secondary sticky top-0'>
          <tr>
            {tableColumns.map((row, idx) => (
              <th key={row.header} tw='py-3 2xl:text-s18 lg:text-s14 text-s12'>
                {row.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody tw='bg-secondary divide-y  2xl:text-s18 lg:text-s14 text-s12 divide-gray-200'>
          {tableData?.map((row, idx) => {
            return <tr key={row.id} onClick={() => handleClickRow(row)}></tr>;
          })}
        </tbody>
      </table>
    </div>
  );
}
