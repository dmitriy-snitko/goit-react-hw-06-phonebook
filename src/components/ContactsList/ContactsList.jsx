import React from 'react';
import { List, Item } from './ContactsList.styles';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-actions';
import { getFiltredContacts } from '../../redux/contacts/contacts-selectors';

const ContactsList = () => {
  const items = useSelector(getFiltredContacts);
  const dispatch = useDispatch();

  return (
    <List>
      {!items.length
        ? <p>Contact list is empty for now</p>
        : items.map(cont => {
          return (
            <Item key={cont.id}>
              <p>{`${cont.name}: ${cont.number}`}</p>
              <button onClick={() => dispatch(deleteContact(cont.id))}>Delete</button>
            </Item>
          )
        })
      }
    </List>
  );
};

export default ContactsList;
