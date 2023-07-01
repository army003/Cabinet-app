import 'twin.macro';

import React, { Suspense, useState } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';

import { tabs } from '@/app/utils/constants';
import Loader from '@/views/loader';
import MainHeader from '@/views/main-header';
import Navbar from '@/views/navbar';

const MainPage = React.lazy(() => import('@/pages/main'));
const Archives = React.lazy(() => import('@/pages/archives'));

export default function Cabinet() {
  const location = useLocation();
  const initialParams = {
    limit: 10,
    offset: 0
  };

  const isAuth = useSelector(state => state.auth.isAuth);
  const [queryParams, setQueryParams] = useState(initialParams);

  return (
    <div tw='flex sm:flex-row flex-col-reverse relative justify-between h-auto min-h-[100vh]'>
      <Navbar />
      <div tw='sm:px-10 flex-1 sm:mt-0'>
        <MainHeader />

        <div tw='px-4 sm:px-0'>
          <Suspense fallback={<Loader />}>
            <Routes>
              {tabs.map(item => (
                <Route
                  index
                  path={item.path}
                  key={item.id}
                  element={<MainPage title={item.title} columns={item.tableColumns} />}
                />
              ))}
            </Routes>
          </Suspense>
        </div>
      </div>
    </div>
  );
}
