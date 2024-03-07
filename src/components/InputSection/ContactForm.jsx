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
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const handleSubmit = event => {
    event.preventDefault();
    if (name.trim() && number.trim()) {
      dispatch(addContact({ name, number }));
      setName('');
      setNumber('');
    }
  };

  const handleNameChange = event => {
    const value = event.target.value;
    setName(value);
    setIsSubmitDisabled(!(value.trim() && number.trim()));
  };

  const handleNumberChange = event => {
    const value = event.target.value;
    setNumber(value);
    setIsSubmitDisabled(!(name.trim() && value.trim()));
  };

  return (
    <Section title="Phonebook">
      <Form onSubmit={handleSubmit}>
        <Input {...NameInputProps} value={name} onChange={handleNameChange} />
        <Input
          {...PhoneNumberInputProps}
          value={number}
          onChange={handleNumberChange}
        />
        <Button {...ButtonSubmitProps} disabled={isSubmitDisabled}>
          {'Add contact'}
        </Button>
      </Form>
    </Section>
  );
};

export default ContactForm;
