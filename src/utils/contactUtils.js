import { useState } from 'react';
import { nanoid } from 'nanoid';

const onSubmit = (event, data, contacts, setContacts, name, setName) => {
  event.preventDefault();
  const isExist = contacts.find(
    contact => contact.name.toLowerCase() === data.name.toLowerCase()
  );
  if (isExist) {
    alert(`${data.name} вже є в контактах.`);
    return;
  }

  setContacts(prevContacts => [...prevContacts, { ...data, id: nanoid() }]);
  reset(setName);
};

const onDelete = (id, contacts, setContacts) => {
  setContacts(prevContacts =>
    prevContacts.filter(contact => contact.id !== id)
  );
};

const onChange = (event, setState) => {
  const { name, value } = event;
  setState(value);
};

const reset = setName => {
  setName('');
};

export { onSubmit, onDelete, onChange, reset };
