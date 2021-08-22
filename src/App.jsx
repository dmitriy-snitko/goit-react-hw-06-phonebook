import ContactForm from './components/ContactForm';
import ContactsList from './components/ContactsList';
import Filter from './components/Filter';
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

export default App;
