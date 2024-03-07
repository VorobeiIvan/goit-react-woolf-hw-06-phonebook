import React, { useState } from 'react';
import { ContactsForm, FilterForm } from 'components';

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
