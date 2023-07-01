import React, { Fragment, useState } from 'react';
import { useLocation } from 'react-router-dom';
import tw from 'twin.macro';

import { NormalTitle } from '@/components';
import Filters from '@/views/filters';
import Table from '@/views/table';
import TablePaginationV2 from '@/views/table-pagination';

const initialParams = {
  is_packed: [false],
  iin: undefined,
  limit: null,
  offset: 0
};

export default function MainPage({ title, columns }) {
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const [queryParams, setQueryParams] = useState(initialParams);

  const isFetching = false;
  return (
    <Fragment>
      <NormalTitle text={title} twStyle={tw`mt-5 mb-3`} />
      <div tw='flex justify-between mb-7'>
        <Filters setQueryParams={setQueryParams} />
      </div>
      <div css={[isFetching && tw`hidden`]}>
        <Table tableColumns={columns} tableData={[]} refetch={() => {}} />
        <div>
          <TablePaginationV2 pagesCount={0} filtered={''} />
        </div>
      </div>
    </Fragment>
  );
}
