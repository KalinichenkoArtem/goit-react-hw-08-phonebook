import { Button, Input, InputAdornment } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/Operations';
import { getContact } from 'redux/Selector';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

export const Form = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contact = useSelector(getContact);
  const changeSubmit = e => {
    const nameInput = e.currentTarget.name;
    const valueInput = e.currentTarget.value;
    switch (nameInput) {
      case 'name':
        setName(valueInput);
        break;
      case 'number':
        setNumber(valueInput);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const alertFind = contact.find(
      contact => contact.name === e.target.name.value
    );
    if (alertFind) {
      return alert(`${name} is already in contacs.`);
    }
    dispatch(addContact({ name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          type="text"
          value={name}
          name="name"
          placeholder="Name"
          onChange={changeSubmit}
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
        <Input
          required
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          type="tel"
          value={number}
          name="number"
          placeholder="Number"
          onChange={changeSubmit}
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <ContactPhoneIcon />
            </InputAdornment>
          }
        />
        <Button type="submit">Add Contact</Button>
      </form>
    </div>
  );
};
