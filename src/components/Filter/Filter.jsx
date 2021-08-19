import React from 'react'
import { connect } from 'react-redux';
import {changeFilter} from '../../redux/contacts/contacts-actions'
import { Label, Title } from '../Filter/Filter.styles';

const Filter = ({value, onChangeFilter }) => {
  return (
    <Label>
      <Title>Find contacts by name:</Title>
      <input type="text" value={value} onChange={onChangeFilter} />
    </Label>
  );
};

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
})

const mapDispatchToProps = dispatch => ({
  onChangeFilter: (e) => dispatch(changeFilter(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
