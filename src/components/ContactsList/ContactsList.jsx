import React from 'react';
import { List, Item } from './ContactsList.styles';
import { getFiltredContacts } from './ContactsList.container';

const ContactsList = ({items, filter, onDeleteContact }) => {
return (
  <List>
    {getFiltredContacts(items, filter).map(cont => {
      return (
        <Item key={cont.id}>
          <p>{`${cont.name}: ${cont.number}`}</p>
          <button onClick={() => onDeleteContact(cont.id)}>Delete</button>
        </Item>
      )
    })}
  </List>
)};

export default ContactsList
