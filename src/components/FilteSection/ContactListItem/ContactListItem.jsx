import { Button } from 'components';
import { ButtonDeleteProps } from 'utils/ButtonProps';

const ContactListItem = contacts => {
  return contacts.map(contact => (
    <li key={contact.id} className="contact-item">
      {contact.name}: {contact.number}
      <Button
        {...ButtonDeleteProps}
        onClick={() => contacts.deleteContact(contact.id)}
      />
    </li>
  ));
};

export default ContactListItem;
