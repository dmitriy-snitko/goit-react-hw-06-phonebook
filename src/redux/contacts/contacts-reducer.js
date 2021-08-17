import { combineReducers } from "redux";
import types from './contacts-types';
import shortid from 'shortid';

const items = (state = (JSON.parse(localStorage.getItem('contacts')) ?? []), {type, payload}) => {
  switch (type) {
    case types.ADD:
      const normalizedName = payload.name.toLowerCase();
      const isAlreadyinContacts = state.find(el => el.name.toLowerCase() === normalizedName);
      const newContact = {
        id: shortid.generate(),
        name: payload.name,
        number: payload.number
      };

      if (isAlreadyinContacts) {
        alert(`${payload.name} is already in contacts!`);
        return state;
      };

      return [
        ...state,
        newContact,
      ];

    case types.DELETE:
      return (
        state.filter(contact => contact.id !== payload)
      );

    default:
      return state;
  };
};

const filter = (state = '', {type, payload}) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return {
        state: payload,
      }

    default:
      return state;
  };
};

export default combineReducers({
  items,
  filter,
});