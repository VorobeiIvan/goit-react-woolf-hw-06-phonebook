import { Button } from 'components';
import { ButtonDeleteProps } from 'utils/ButtonProps';

const ContactListItem = ({ name, number }) => {
  return (
    <li className="contact-item">
      {name}: {number}
      <Button {...ButtonDeleteProps}></Button>
    </li>
  );
};

export default ContactListItem;
