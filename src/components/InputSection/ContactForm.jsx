import { Button, Form, Input, Section } from 'components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../store/contactsSlice/slice';
import {
  ButtonSubmitProps,
  NameInputProps,
  PhoneNumberInputProps,
} from 'utils';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  const handleNameChange = event => setName(event.target.value);
  const handleNumberChange = event => setNumber(event.target.value);

  return (
    <Section title="Phonebook">
      <Form onSubmit={handleSubmit}>
        <Input {...NameInputProps} onChange={handleNameChange} />
        <Input {...PhoneNumberInputProps} onChange={handleNumberChange} />
        <Button {...ButtonSubmitProps}>{'Add contact'}</Button>
      </Form>
    </Section>
  );
};

export default ContactForm;
