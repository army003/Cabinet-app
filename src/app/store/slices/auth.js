import { createSlice } from '@reduxjs/toolkit';

import { authLogin } from '@/app/api/auth.api';

const initialState = {
  isAuth: false,
  access: '',
  refresh: ''
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, { payload }) => {
      state.isAuth = payload;
    }
  },
  extraReducers: builder => {
    builder.addMatcher(authLogin.endpoints.authLogin.matchFulfilled, (state, { payload }) => {
      state.access = payload.access;
      state.refresh = payload.refresh;
    });
  }
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
