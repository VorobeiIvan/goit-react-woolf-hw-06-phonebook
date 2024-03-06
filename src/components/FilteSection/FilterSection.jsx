import { Section, Form, Input, ContactList } from 'components';
import { FilterProps } from 'utils';

const FilterForm = () => {
  return (
    <Section>
      <h2>Contacts</h2>
      <Form>
        <Input {...FilterProps} />
      </Form>
      <ContactList />
    </Section>
  );
};

export default FilterForm;
