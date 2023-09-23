import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { deleteContact, fetchContacts } from 'redux/operations';
import {
  ItemStyled,
  NameStyled,
  NumberStyled,
  DeleteButton,
  ListStyled,
} from './ContactsList.styled';
import { useEffect } from 'react';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <ListStyled>
        {filteredContacts.map(({ id, name, phone }) => (
          <ItemStyled key={id}>
            <NameStyled>{name} :</NameStyled>
            <NumberStyled>{phone}</NumberStyled>
            <DeleteButton onClick={() => dispatch(deleteContact(id))}>
              Delete
            </DeleteButton>
          </ItemStyled>
        ))}
      </ListStyled>
    </div>
  );
};
