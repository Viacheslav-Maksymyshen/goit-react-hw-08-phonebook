import { Navigate } from 'react-router-dom';
import { getAuth } from 'redux/mySlice/authSlice';
import { useSelector } from 'react-redux';

export const PublicRoute = ({ children }) => {
  const { isLoggedIn } = useSelector(getAuth);

  return isLoggedIn ? <Navigate to="/contacts" /> : children;
};
