const getToken = state => state.auth.accessToken;
const getStatus = state => state.auth.status;
export const authSelectors = { getToken, getStatus };
