import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { logOut, setCredentials } from './authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://wallet-backend-1.herokuapp.com/api',
  prepareHeaders: (headers, { getState }) => {
    const accessToken = getState().auth.accessToken;
    if (accessToken) {
      headers.set('authorization', `Bearer ${accessToken}`);
    }
    return headers;
  },
});
export const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.status === 401) {
    const currentCredential = api.getState().auth;
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
    } else {
      api.dispatch(logOut);
    }
  }
  return result;
};
