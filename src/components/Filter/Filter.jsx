import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/filtersSlice';
import {
  ContactsTitle,
  FormStyled,
  LabelStyled,
  SpanStyled,
  InputStyled,
} from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <FormStyled>
      <ContactsTitle>Contacts</ContactsTitle>
      <LabelStyled>
        <SpanStyled>Find contacts by name</SpanStyled>
        <InputStyled
          type="text"
          value={filter}
          onChange={event => dispatch(setFilter(event.target.value.trim()))}
        />
      </LabelStyled>
    </FormStyled>
  );
};
