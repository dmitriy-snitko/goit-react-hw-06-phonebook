import React from 'react';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-actions';
import { List, Item } from '../ContactsList/ContactsList.styles';

const ContactsList = ({items, filter, onDeleteContact }) => {

  const getFiltredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return items.filter(cont =>
      cont.name.toLowerCase().includes(normalizedFilter));
  };

  return (
    <List>
      {getFiltredContacts().map(cont => {
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

const mapStateToProps = state => ({
  items: state.contacts.items,
  filter: state.contacts.filter
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
