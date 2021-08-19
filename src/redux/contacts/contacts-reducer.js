import { combineReducers } from "redux";
import { createReducer } from '@reduxjs/toolkit';
import * as actions from '../contacts/contacts-actions';

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => addContact(state, payload),

  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

const addContact = (state, payload) => {
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