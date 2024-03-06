import React from 'react';
import { createContactsListItems } from 'utils';

const ContactList = ({ contacts }) => {
  return (
    <ul className="contact-list">{createContactsListItems({ contacts })}</ul>
  );
};

export default ContactList;
