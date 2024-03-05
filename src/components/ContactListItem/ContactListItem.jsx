const ContactListItem = ({ contact, onDelete }) => {
  return (
    <li key={contact.id} className="contact-item">
      {contact.name}: {contact.number}
      <button className="btn-del" onClick={() => onDelete(contact.id)}>
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;
