import { combineReducers } from "redux";
import { createReducer } from '@reduxjs/toolkit';
import {addContact, deleteContact, changeFilter} from '../contacts/contacts-actions';

const items = createReducer([], {
  [addContact]: (state, { payload }) => onAddContact(state, payload),

  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const onAddContact = (state, payload) => {
  const normalizedName = payload.name.toLowerCase();
  const isAlreadyinContacts = state.find(el => el.name.toLowerCase() === normalizedName);

  if (isAlreadyinContacts) {
    alert(`${payload.name} is already in contacts!`);
    return state;
  };

  const newContact = {
    id: payload.id,
    name: payload.name,
    number: payload.number
  };

  return [
    newContact,
    ...state,
  ];
};

export default combineReducers({
  items,
  filter,
});