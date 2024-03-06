import React, { useState } from 'react';
import { Button, Input, Section, Form } from 'components';
import { onSubmit, onChange } from 'utils/contactUtils';
import {
  ButtonSubmitProps,
  NameInputProps,
  PhoneNumberInputProps,
} from 'utils';

const ContactsForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  return (
    <Section title="Phonebook">
      <Form onSubmit={event => onSubmit(event, { name, number })}>
        <Input
          {...NameInputProps}
          value={name}
          onChange={event =>
            onChange({ name: 'name', value: event.target.value }, setName)
          }
        />
        <Input
          {...PhoneNumberInputProps}
          value={number}
          onChange={event =>
            onChange({ name: 'number', value: event.target.value }, setNumber)
          }
        />
      </Form>
      <Button {...ButtonSubmitProps}></Button>
    </Section>
  );
};

export default ContactsForm;
