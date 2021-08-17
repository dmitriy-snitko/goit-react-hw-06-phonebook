import { connect } from 'react-redux';
import * as actions from './redux/contacts/contacts-actions';
import { useEffect } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactsList from './components/ContactsList/ContactsList';
import Filter from './components/Filter/Filter';
import { Container, Title } from './App.styles.jsx';

function App({ filter, items, changeFilter }) {

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(items));
  }, [items]);

  const getFiltredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return items.filter(cont =>
      cont.name.toLowerCase().includes(normalizedFilter));
  };

    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm />
        <Filter value={filter} onChange={changeFilter} />
        
        <Title>Contacts</Title>
        <ContactsList filtredContacts={getFiltredContacts} />
    </Container>
  );
};

const mapStateToProps = state => ({
  items: state.contacts.items,
  filter: state.contacts.filter
})

const mapDispatchToProps = dispatch => ({
  // deleteContact: (id) => dispatch(actions.deleteContact(id)),
  // addContact: (name, number) => dispatch(actions.addContact(name, number)),
  changeFilter: (filterValue) => dispatch(actions.changeFilter(filterValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
