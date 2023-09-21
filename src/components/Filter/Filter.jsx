import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filtersSlice';
import {
  FormStyled,
  LabelStyled,
  SpanStyled,
  InputStyled,
} from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <FormStyled>
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
