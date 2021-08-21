import React from 'react'
import { Label, Title } from '../Filter/Filter.styles';

const Filter = ({ onChangeFilter }) => {
  return (
    <Label>
      <Title>Find contacts by name:</Title>
      <input type="text" onChange={onChangeFilter} />
    </Label>
  );
};

export default Filter;
