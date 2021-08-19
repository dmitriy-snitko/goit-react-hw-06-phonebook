import { connect } from 'react-redux';
import * as actions from './redux/contacts/contacts-actions';
import ContactForm from './components/ContactForm/ContactForm';
import ContactsList from './components/ContactsList/ContactsList';
import Filter from './components/Filter/Filter';
import { Container, Title } from './App.styles.jsx';

function App() {
    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm />
        <Filter />

        <Title>Contacts</Title>
        <ContactsList />
    </Container>
  );
};

const mapStateToProps = state => ({
  items: state.contacts.items,
})

const mapDispatchToProps = dispatch => ({
  changeFilter: (filterValue) => dispatch(actions.changeFilter(filterValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
