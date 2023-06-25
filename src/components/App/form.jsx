import { Contacts } from 'components/Contacts/Contacs';
import { FindFilt } from 'components/Filter/Filter';
import { Form } from 'components/ContactForm/ContactForm';

export const ContactsForm = () => {
  return (
    <div className="form">
      <Form />
      <FindFilt />
      <Contacts />
    </div>
  );
};
