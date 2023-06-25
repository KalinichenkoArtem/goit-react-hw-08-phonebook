import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getUsername } from 'redux/authPer/auth-selector';
import { logOut } from 'redux/Operations';

const AuthNav = () => {
  const name = useSelector(getUsername);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Welcom {name}</p>
      <Button variant="contained" onClick={() => dispatch(logOut())}>
        Exit
      </Button>
    </div>
  );
};
export default AuthNav;
