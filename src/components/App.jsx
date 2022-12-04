import ContactForm from 'components/phonebook/phonebook';
import ContactList from 'components/phonebook/phonebookList';
import Filter from 'components/phonebook/phonebookFilter';

export const App = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <p>You can add new contacts below:</p>
      <ContactForm />
      <p>Your Contacts:</p>
      <Filter />
      <ContactList />
    </>
  );
};
