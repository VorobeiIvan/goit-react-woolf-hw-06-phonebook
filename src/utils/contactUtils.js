import { ContactListItem } from 'components';
function createContactsList({ contacts = [] }) {
  return contacts.map(contact => (
    <ContactListItem
      key={contact.id}
      name={contact.name}
      number={contact.number}
    />
  ));
}

export { createContactsList };
