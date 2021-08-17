import types from './contacts-types';

export const addContact = (name, number) => ({
  type: types.ADD,
  payload: {
    name,
    number,
  }
});

export const deleteContact = contactId => ({
  type: types.DELETE,
  payload: contactId,
});

export const changeFilter = e => ({
  type: types.CHANGE_FILTER,
  payload: e.currentTarget.value,
});
