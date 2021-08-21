import { connect } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-actions';
import ContactsList from './ContactsList';

export const getFiltredContacts = (items, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return items.filter(cont =>
    cont.name.toLowerCase().includes(normalizedFilter));
};

const mapStateToProps = state => ({
  items: state.contacts.items,
  filter: state.contacts.filter
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
