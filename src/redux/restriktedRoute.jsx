import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoading } from 'redux/Selector';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getIsLoading);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
