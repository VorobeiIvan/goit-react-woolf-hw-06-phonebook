import { nanoid } from 'nanoid';

const formSubmitHandler = (data, contacts, setContacts) => {
  const { name } = data;
  const isExist = contacts.find(
    contact => contact.name.toLowerCase() === name.toLowerCase()
  );

  if (isExist) {
    alert(`${name} is already in contacts.`);
    return;
  }

  setContacts(prevContacts => [...prevContacts, { ...data, id: nanoid() }]);
};

const deleteContact = (id, contacts, setContacts) => {
  setContacts(prevContacts =>
    prevContacts.filter(contact => contact.id !== id)
  );
};

export { formSubmitHandler, deleteContact };
