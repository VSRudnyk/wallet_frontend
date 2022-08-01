import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { authSelectors } from 'redux/selector';
export const PrivatRoute = ({ children }) => {
  const isToken = useSelector(authSelectors.getToken);
  return (
    <>{isToken ? children : <Navigate to="/wallet_frontend/register" />}</>
  );
};
