import { ContactListItem } from 'components';
function createContactsListItems({ contacts = [] }) {
  return contacts.map(contact => (
    <ContactListItem
      key={contact.id}
      name={contact.name}
      number={contact.number}
    />
  ));
}

export { createContactsListItems };
