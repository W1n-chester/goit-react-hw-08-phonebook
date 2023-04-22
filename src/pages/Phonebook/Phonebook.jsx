import { ContactList } from "components/Contacts/Contact-List/Contact-list";
import { Form } from "components/Contacts/Form/Form";


const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // title: {
  //   fontWeight: 500,
  //   fontSize: 48,
  //   textAlign: 'center',
  // },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <Form />
      <ContactList/>
    </div>
  );
}
