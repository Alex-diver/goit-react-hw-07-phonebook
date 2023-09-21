import { ToastContainer } from 'react-toastify';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

import { TitleStyled, ContactsTitle, ConteinerStyled } from './App.styled';

export const App = () => {
  return (
    <>
      <ToastContainer />
      <ConteinerStyled>
        <TitleStyled>Phonebook</TitleStyled>
        <ContactForm />
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter />

        <ContactList />
      </ConteinerStyled>
    </>
  );
};
