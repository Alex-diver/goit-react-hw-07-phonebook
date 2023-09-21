import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import {
  ItemStyled,
  NameStyled,
  NumberStyled,
  DeleteButton,
  ListStyled,
} from './ContactsList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <ListStyled>
        {filteredContacts.map(({ id, name, number }) => (
          <ItemStyled key={id}>
            <NameStyled>{name} :</NameStyled>
            <NumberStyled>{number}</NumberStyled>
            <DeleteButton onClick={() => dispatch(deleteContact(id))}>
              Delete
            </DeleteButton>
          </ItemStyled>
        ))}
      </ListStyled>
    </div>
  );
};
