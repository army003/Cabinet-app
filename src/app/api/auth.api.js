import auth from '../store/slices/auth';
import { api, APIUrl } from '.';

export const authLogin = api.injectEndpoints({
  endpoints: build => ({
    authLogin: build.mutation({
      query: ({ mobile_phone, password }) => ({
        url: `${APIUrl}/${auth}/`,
        method: 'POST',
        body: {
          mobile_phone,
          password
        }
      }),
      transformResponse: response => response.data
    })
  })
});

export const { useAuthLoginMutation } = authLogin;
