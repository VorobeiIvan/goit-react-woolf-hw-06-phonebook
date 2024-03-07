import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, Input, Section } from 'components';
import {
  ButtonSubmitProps,
  NameInputProps,
  PhoneNumberInputProps,
} from 'utils';
import { addContact } from 'redux/contactsSlice/slice';

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

  const handleNameChange = event => handleNameChange(event, setName);
  const handleNumberChange = event => handleNumberChange(event, setNumber);

  return (
    <Section title="Phonebook">
      <Form onSubmit={handleSubmit}>
        <Input {...NameInputProps} onChange={handleNameChange} />
        <Input {...PhoneNumberInputProps} onChange={handleNumberChange} />
        <Button {...ButtonSubmitProps} />
      </Form>
    </Section>
  );
};

export default ContactForm;
