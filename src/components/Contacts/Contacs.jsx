import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { getContact, getStatusFilter } from 'redux/Selector';
import { useEffect } from 'react';
import { deleteContact, fetchContact } from 'redux/Operations';
import { Button } from '@mui/material';

export const Contacts = () => {
  const contact = useSelector(getContact);
  const filterRedux = useSelector(getStatusFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  const filterContacts = () => {
    const normalizedFilter = filterRedux.toLowerCase();
    return contact.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filtredContacts = filterContacts();

  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {filtredContacts.map(({ id, name, number }) => (
          <li key={id}>
            <p>
              Name: <span>{name}</span>
            </p>
            <p>
              Number: <span>{number}</span>
            </p>
            <Button
              variant="outlined"
              color="error"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
