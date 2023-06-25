import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/Operations';

const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const val = e.target.name;
    switch (val) {
      case 'name':
        return setName(e.target.value);
      case 'email':
        return setEmail(e.target.value);
      case 'password':
        return setPassword(e.target.value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        type="text"
        value={name}
        name="name"
        onChange={handleChange}
      />
      <TextField
        id="outlined-basic"
        label="E-mail"
        variant="outlined"
        type="email"
        value={email}
        name="email"
        onChange={handleChange}
      />
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        type="password"
        value={password}
        name="password"
        onChange={handleChange}
      />
      <Button type="submit" variant="contained" color="success">
        Register
      </Button>
    </form>
  );
};

export default Register;
