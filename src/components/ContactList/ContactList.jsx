import ContactListItem from './ContactListItem';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className="contact-list">
      {contacts.map(contact => (
        <ContactListItem
          key={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default ContactList;
