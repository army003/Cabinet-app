import { fetchBaseQuery, retry } from '@reduxjs/toolkit/query';
import { createApi } from '@reduxjs/toolkit/query/react';
import { PURGE } from 'redux-persist';

import { setError } from '@/app/store/slices/error';

export const APIUrl = import.meta.env.CABINET_API;

const baseQuery = retry(
  fetchBaseQuery({
    baseUrl: '/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.access;
      if (token) headers.set('Authorization', `JWT ${token}`);
      headers.set('Content-type', 'application/json');
      headers.set('Accept', 'application/json');
      return headers;
    }
  }),
  { maxRetries: 0 }
);

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  /*if (result.error && result.error.status === 401) {
    // try to get a new token
    const refreshResult = await baseQuery('/refreshToken', backAPI, extraOptions)
    if (refreshResult.data) {
      // store the new token
      backAPI.dispatch(tokenReceived(refreshResult.data))
      // retry the initial query
      result = await baseQuery(args, backAPI, extraOptions)
    } else {
      backAPI.dispatch(logout())
    }
  }*/

  //console.log(result.error);

  if (result.error?.status === 'FETCH_ERROR' || result.error?.originalStatus === 500) {
    //throw new Error('Сервер не доступен');
    api.dispatch(
      setError(
        'Просим прощения за неудобства, но в данный момент по техническим причинам сервис недоступен. Пожалуйста, попробуйте позднее'
      )
    );
  }
  if (result.error && result.error.status === 401) {
    await api.dispatch({ type: PURGE, result: () => null });
    result = await baseQuery(args, api, extraOptions);
  }
  return result;
};

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Cars', 'Orders'],
  endpoints: () => ({})
});

export const formDataApi = createApi({
  reducerPath: 'formDataApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.access;
      if (token) headers.set('Authorization', `JWT ${token}`);
      // headers.set('Content-type', 'text/plain');
      return headers;
    }
  }),
  tagTypes: [],
  endpoints: () => ({})
});
