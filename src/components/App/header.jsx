import AuthNav from 'components/FormLogin/authNav';
import { useSelector } from 'react-redux';
import { getIsLoading } from 'redux/Selector';
import { Button } from '@mui/material';
import 'components/App/header.css';
const { NavLink } = require('react-router-dom');
const Header = () => {
  const isLoggedIn = useSelector(getIsLoading);

  return (
    <div className="header">
      <Button variant="contained">
        <NavLink to="/">Home</NavLink>
      </Button>
      {isLoggedIn ? (
        <>
          <Button variant="contained">
            <NavLink to="/contacts">Contacts</NavLink>
          </Button>
          <AuthNav />
        </>
      ) : (
        <>
          <Button variant="contained">
            <NavLink to={'/login'}>Log In</NavLink>
          </Button>
          <Button variant="contained">
            <NavLink to={'/register'}>Register</NavLink>
          </Button>
        </>
      )}
    </div>
  );
};
export default Header;
