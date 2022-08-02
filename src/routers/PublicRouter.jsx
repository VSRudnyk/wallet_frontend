import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from 'redux/selector';

export default function PublickRoute({ children }) {
  const isToken = useSelector(authSelectors.getToken);
  return <>{isToken ? <Navigate to="/wallet_frontend/home" /> : children}</>;
}
