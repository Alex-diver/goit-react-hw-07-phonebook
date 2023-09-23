import { ToastContainer } from 'react-toastify';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

import { ConteinerStyled } from './App.styled';

export const App = () => {
  return (
    <>
      <ToastContainer />
      <ConteinerStyled>
        <ContactForm />
        <Filter />
        <ContactList />
      </ConteinerStyled>
    </>
  );
};
