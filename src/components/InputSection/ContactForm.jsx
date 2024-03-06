import { Button, Input, Section } from 'components';
import {
  ButtonSubmitProps,
  NameInputProps,
  PhoneNumberInputProps,
} from 'utils';
import Form from '../Elements/Form/Form';

const ContactsForm = () => {
  return (
    <Section>
      <h2>Phonebook</h2>
      <Form>
        <Input {...NameInputProps} />
        <Input {...PhoneNumberInputProps} />
      </Form>
      <Button {...ButtonSubmitProps}></Button>
    </Section>
  );
};

export default ContactsForm;
