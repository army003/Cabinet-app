import 'twin.macro';

import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';

import { genNumArr } from '@/helper';

export default function TablePaginationV2({ pagesCount, filtered }) {
  const [itemOffset, setItemOffset] = useState(filtered?.offset);
  const [initialPage, setInitialPage] = useState(0);
  const dispatch = useDispatch();
  const items = genNumArr(pagesCount);

  const endOffset = itemOffset + filtered?.limit;

  const pageCount = Math.ceil(items.length / filtered?.limit);

  const handlePageClick = event => {
    // const newOffset = (event.selected * filtered?.limit) % items.length;
    // dispatch(setPage({ offset: newOffset }));
  };

  useEffect(() => {
    setInitialPage(prev => (prev = 0));
  }, [filtered]);
  return (
    <div tw='flex mt-3 mb-5 justify-end w-[100%]'>
      <div tw='flex items-center justify-center'>
        <ReactPaginate
          className='pagination'
          breakLabel='...'
          nextLabel={pagesCount > 1 && '>'}
          onPageChange={handlePageClick}
          initialPage={initialPage}
          pageCount={pageCount}
          previousLabel={pagesCount > 1 && '<'}
        />
      </div>
    </div>
  );
}
