import React from 'react';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-actions';

import PropTypes from 'prop-types'
import { List, Item } from '../ContactsList/ContactsList.styles';

const ContactsList = ({ filtredContacts, onDeleteContact }) => {
  return (
    <List>
      {filtredContacts().map(cont => {
        return (
          <Item key={cont.id}>
            <p>{`${cont.name}: ${cont.number}`}</p>
            <button onClick={() => onDeleteContact(cont.id)}>Delete</button>
          </Item>
        )
      })}
    </List>
  )
};

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(deleteContact(id)),
})

ContactsList.propTypes = {
  filtredContacts: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ContactsList);
