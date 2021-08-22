import React from 'react'
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contacts-actions'
import { Label, Title } from '../Filter/Filter.styles';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Label>
      <Title>Find contacts by name:</Title>
      <input
        type="text"
        onChange={(e) => dispatch(changeFilter(e.currentTarget.value))}
      />
    </Label>
  );
};

export default (Filter);
