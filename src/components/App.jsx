import { Phonebook } from './Name/name';

import { GlobalStyle } from 'Global.styled';
import { ContactList } from './Contactlist/contactList';
import { Filter } from './Filter/filter';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <Phonebook />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <GlobalStyle />
      <Toaster />
    </>
  );
};
