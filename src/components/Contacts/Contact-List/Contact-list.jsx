import { useSelector } from 'react-redux';
import { Filter } from '../Filter/Filter';
import { Item } from '../ContactsItem/ContactsItem';
import { Container } from './Contact-List.styled';
export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contactsList);

  const filter = useSelector(state => state.filter);

  const normFilter = filter.toLocaleLowerCase();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normFilter)
  );
  visibleContacts.sort(function (a, b) {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA < nameB)
      //сортируем строки по возрастанию
      return -1;
    if (nameA > nameB) return 1;
    return 0; // Никакой сортировки
  });
  return (
    <Container>
      <h2>Contacts</h2>
      <Filter />
      <ol>
        {visibleContacts.map(contact => (
          <li key={contact.id}>
            <Item name={contact.name} number={contact.number} id={contact.id} />
          </li>
        ))}
      </ol>
    </Container>
  );
};
