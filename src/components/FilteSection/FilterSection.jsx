import { ContactList, Form, Input, Section } from 'components';
import { FilterProps } from 'utils';

const FilterForm = ({ contacts }) => {
  return (
    <Section title="Contacts">
      <Form>
        <Input {...FilterProps} />
      </Form>
      <ContactList contacts={contacts} />
    </Section>
  );
};

export default FilterForm;
