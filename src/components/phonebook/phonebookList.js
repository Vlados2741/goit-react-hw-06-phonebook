import ContactItem from 'components/phonebook/phonebookItem';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/slice';
import { getFilter, getItems } from 'redux/selectors';
// import { Item } from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getItems);
  const filterContact = useSelector(getFilter);

  const handleDelete = id => dispatch(deleteContact(id));

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterContact.toLowerCase())
  );

  // console.log(visibleContacts);

  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem
          id={id}
          key={id}
          name={name}
          number={number}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ContactList;
