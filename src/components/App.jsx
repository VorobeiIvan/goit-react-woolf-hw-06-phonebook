import {
  Section,
  ContactForm,
  ContactList,
  Filter,
  formSubmitHandler,
  deleteContact,
  changeFilter,
  useState,
  useEffect,
} from './index.js';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem('contacts');
    return storedContacts ? JSON.parse(storedContacts) : [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleFormSubmit = data => {
    formSubmitHandler(data, contacts, setContacts);
  };

  const handleFilterChange = event => {
    changeFilter(event, setFilter);
  };

  const handleDeleteContact = id => {
    deleteContact(id, contacts, setContacts);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container">
      <Section title="Phonebook">
        <ContactForm onSubmit={handleFormSubmit} />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} onChange={handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          onDelete={handleDeleteContact}
        />
      </Section>
    </div>
  );
};

export default App;
