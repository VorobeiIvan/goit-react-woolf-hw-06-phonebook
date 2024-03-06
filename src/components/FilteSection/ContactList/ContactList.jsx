import { createContactsList } from 'utils';
const ContactList = () => {
  return (
    <ul className="contact-list">
      {createContactsList()}
    </ul>
  );
};

export default ContactList;
