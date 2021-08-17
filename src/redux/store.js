import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from "./contacts/contacts-reducer";
// import types from './contacts/contacts-types';
// import shortid from 'shortid';

// const initialState = {
//     items: (JSON.parse(localStorage.getItem('contacts')) ?? []),
//     filter: ''
// };

// const reducer = (state = initialState, {type, payload}) => {
//   switch (type) {
//     case types.DELETE:
//       return {
//           ...state,
//           items: state.items.filter(contact => contact.id !== payload)
//       }
    
//     case types.ADD:
//       const normalizedName = payload.name.toLowerCase();
//       const isAlreadyinContacts = state.items.find(el => el.name.toLowerCase() === normalizedName);
//       const newContact = {
//         id: shortid.generate(),
//         name: payload.name,
//         number: payload.number
//       };

//       if (isAlreadyinContacts) {
//         alert(`${payload.name} is already in contacts!`);
//         return state;
//       };

//       return {
//           ...state,
//           items: [newContact, ...state.items]
//       };
    
//     case types.CHANGE_FILTER:
//       return {
//           ...state,
//           filter: payload,
//       }

//     default:
//       return state;
//   };
// }

const rootReducer = combineReducers({
  contacts: contactsReducer,
  // contacts: reducer,
})

const store = createStore(rootReducer, composeWithDevTools());

export default store;