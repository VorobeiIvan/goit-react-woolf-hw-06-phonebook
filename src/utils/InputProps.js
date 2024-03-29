const NameInputProps = {
  type: 'text',
  name: 'name',
  pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
  title: "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
  placeholder: 'Name',
};

const PhoneNumberInputProps = {
  type: 'tel',
  name: 'number',
  pattern: '[+]?\\d{1,4}[ .\\-s]?(?:\\d{1,3}?)?[ .\\-s]?\\d{1,4}[ .\\-s]?\\d{1,4}[ .\\-s]?\\d{1,9}',
  title: 'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
  placeholder: 'Phone number',
};

const FilterProps = {
  type: 'text',
  name: 'filter',
  pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
  title: "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
  placeholder: 'Find contacts by name',
};


export { NameInputProps, PhoneNumberInputProps, FilterProps };
