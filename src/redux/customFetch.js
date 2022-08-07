import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import {  setCredentials } from './authSlice';
import { Mutex } from 'async-mutex';

const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://wallet-backend-1.herokuapp.com/api/',
  prepareHeaders: (headers, { getState }) => {
    const accessToken = getState().auth.accessToken;
    if (accessToken) {
      headers.set('authorization', `Bearer ${accessToken}`);
    }
    return headers;
  },
});
export const baseQueryWithReauth = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  const currentCredential = api.getState().auth;

  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        api.dispatch(
          setCredentials({
            ...currentCredential,
            accessToken: currentCredential.refreshToken,
          }),
        );
        const refreshResult = await baseQuery(
          {
            url: 'auth/refresh',
            method: 'POST',
            body: {
              sid: `${currentCredential.sid}`,
            },
            credentials: 'include',
          },
          api,
          extraOptions,
        );
        if (refreshResult.data) {
          api.dispatch(
            setCredentials({
              ...refreshResult.data.data,
              user: currentCredential.user,
              isLoggedIn: currentCredential.isLoggedIn,
            }),
          );
          result = await baseQuery(args, api, extraOptions);
        } 
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }
  return result;
};

