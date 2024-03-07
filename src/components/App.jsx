import { ContactsForm, FilterForm } from 'components';
import { useState } from 'react';

const App = () => {
  const [contacts, setContacts] = useState([]);

  return (
    <div>
      <ContactsForm contacts={contacts} setContacts={setContacts} />
      <FilterForm contacts={contacts} />
    </div>
  );
};

export default App;
