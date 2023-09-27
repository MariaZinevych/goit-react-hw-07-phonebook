import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selector';
import { addContacts } from 'redux/contactSlice';
import { useState } from 'react';

export const Phonebook = () => {
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
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(
      addContacts({
        name: name,
        number,
        id: nanoid(),
      })
    );

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
        <label>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

        <label>
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
