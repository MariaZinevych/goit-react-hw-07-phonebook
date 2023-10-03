import { Name } from './Name/name';

import { GlobalStyle } from 'Global.styled';
import { ContactList } from './Contactlist/contactList';
import { Filter } from './Filter/filter';
import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts);
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <Name />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <GlobalStyle />
      <Toaster />
    </>
  );
};
