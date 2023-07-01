import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { PERSIST, persistReducer, persistStore, PURGE, REGISTER } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session';

import { api, formDataApi } from '@/app/api';
import { notificationMiddleware } from '@/app/middlewares/notification';
import authSlice from '@/app/store/slices/auth';
import carsSlice from '@/app/store/slices/cars';

const persistConfig = {
  key: 'root',
  storage: sessionStorage,
  version: 1,
  blacklist: ['api', 'formDataApi']
};

export const rootReducer = () => {
  return combineReducers({
    auth: authSlice,
    cars: carsSlice,
    [api.reducerPath]: api.reducer,
    [formDataApi.reducerPath]: formDataApi.reducer
  });
};

const persistedReducer = persistReducer(persistConfig, rootReducer());

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [REGISTER, PERSIST, PURGE]
      }
    }).concat(api.middleware, notificationMiddleware),
  devTools: import.meta.env.DEV
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
