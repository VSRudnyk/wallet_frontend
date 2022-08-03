import { fetchBaseQuery } from '@reduxjs/toolkit/query';

let sid = '';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3000/api/', prepareHeaders: (headers, { getState }) => {
    const accessToken = getState().auth.accessToken;
    const refreshToken = getState().auth.refreshToken;
    sid = getState().auth.sid;
    if (accessToken) {
      headers.set('authorization', `Bearer ${accessToken}`);
    }
    return headers;
  },
});
export const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    // try to get a new token
    const refreshResult = await baseQuery({
      url: 'auth/refresh',
      method: 'POST',
      body: {
        sid: `${sid}`,
      },
    }, api, extraOptions);
    if (refreshResult.data) {
      // store the new token
      // api.dispatch(tokenReceived(refreshResult.data));
      // retry the initial query
      result = await baseQuery(args, api, extraOptions);
    } else {
      // api.dispatch(loggedOut());
    }
  }
  return result;
};
