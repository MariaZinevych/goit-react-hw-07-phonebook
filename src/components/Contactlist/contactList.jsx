import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selector';
import { removeContact } from 'redux/contactSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const filtered = useSelector(getFilter);

  const normalizedFilter = filtered.toLowerCase();
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          <p> {name} </p>
          <p> {number} </p>
          <button
            type="button"
            name="delete"
            onClick={() => dispatch(removeContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </>
  );
};
