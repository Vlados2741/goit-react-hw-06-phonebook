import ContactForm from 'components/phonebook/phonebook';
import ContactList from 'components/phonebook/phonebookList';
import Filter from 'components/phonebook/phonebookFilter';
import { useSelector } from 'react-redux';
import { getItems } from 'redux/selectors';
import './phonebook/phonebook-style.css';

export const App = () => {
  const contacts = useSelector(getItems);
  console.log(contacts);
  if (contacts.length !== 0) {
    console.log('Hello');
  }
  return (
    <>
      <h1>Phonebook</h1>
      <p>You can add new contacts below:</p>
      <ContactForm />
      {contacts.length !== 0 && (
        <div>
          <h3>Contacts:</h3>
          <div className="search">
            <h4>Search contacts by name</h4>
            <Filter />
          </div>
          <ContactList />
        </div>
      )}
    </>
  );
};
