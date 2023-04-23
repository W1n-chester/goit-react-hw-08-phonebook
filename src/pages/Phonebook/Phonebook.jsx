import { ContactList } from 'components/Contacts/Contact-List/Contact-list';
import { Form } from 'components/Contacts/Form/Form';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'blok',
  },
  title: {
    textAlign: 'center',
  },
};

export default function PhoneBook() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Phonebook</h2>
      <Form />
      <ContactList />
    </div>
  );
}
