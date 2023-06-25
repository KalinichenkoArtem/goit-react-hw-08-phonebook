import { Route, Routes } from 'react-router-dom';
import Register from 'components/FormLogin/formRegiste';
import LogIn from 'components/FormLogin/formLogin';
import Layout from 'components/App/Layout';
import { ContactsForm } from 'components/App/form';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from 'redux/Operations';
import { PrivateRoute } from 'redux/privareRoute';
import { RestrictedRoute } from 'redux/restriktedRoute';
import { getFetching } from 'redux/authPer/auth-selector';

export const App = () => {
  const dispatch = useDispatch();
  const isFetching = useSelector(getFetching);
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return isFetching ? (
    isFetching
  ) : (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<LogIn />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsForm />} />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};
