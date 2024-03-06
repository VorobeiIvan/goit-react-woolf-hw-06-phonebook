import { Section, Form, Input, ContactList } from 'components';
import { FilterProps } from 'utils';

const FilterForm = () => {
  return (
    <Section title="Contacts">
      <Form>
        <Input {...FilterProps} />
      </Form>
      <ContactList />
    </Section>
  );
};

export default FilterForm;
