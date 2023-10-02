import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/operations';
import { getContacts } from 'redux/selector';
import { nanoid } from '@reduxjs/toolkit';

const nameId = nanoid();
const numberId = nanoid();

export const Name = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const isInContacts = contacts.some(
      contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
    );

    if (isInContacts) {
      alert(`${name}is already in contacts`);
      return;
    }

    dispatch(addContacts({ name, number }));
    setName('');
    setNumber('');
  };

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor={nameId}>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

        <label htmlFor={numberId}>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    </>
  );
};
