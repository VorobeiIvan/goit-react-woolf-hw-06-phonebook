import { createContactsListItems } from 'utils';
const ContactList = () => {
  return (
    <ul className="contact-list">
      {createContactsListItems({ contacts: [] })}
    </ul>
  );
};

export default ContactList;
