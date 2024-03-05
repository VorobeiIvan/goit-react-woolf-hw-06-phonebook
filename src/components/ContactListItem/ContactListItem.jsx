const ContactListItem = ({ id, name, number, onDelete }) => {
  return (
    <li className="contact-item">
      {name}: {number}
      <button className="btn-del" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;
