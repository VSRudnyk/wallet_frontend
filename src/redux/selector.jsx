const getToken = state => state.auth.accessToken;
const getSid = state => state.auth.sid;

export const authSelectors = { getToken };
