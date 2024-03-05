const FilterConstantProps = {
  label: 'Find contact by name',
  className: 'input',
  type: 'text',
  name: 'filter',
  value: '',
  onChange: () => {},
  pattern: /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
  title:
    "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
  required: true,
  placeholder: 'Enter the contact you are looking for',
};

const NameInputComponentProps = {
  label: 'Name',
  className: 'input',
  type: 'text',
  name: 'name',
  value: '',
  onChange: () => {},
  pattern: /^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
  title:
    "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
  required: true,
  placeholder: 'Enter your name (Alex)',
};

const NumberInputComponentProps = {
  label: 'Number',
  className: 'input',
  type: 'tel',
  name: 'number',
  value: '',
  onChange: () => {},
  pattern:
    /\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/,
  title:
    'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
  required: true,
  placeholder: 'Enter your number ( +380(67)-000-00-00 ) ',
};

export {
  FilterConstantProps,
  NameInputComponentProps,
  NumberInputComponentProps,
};
