import styles from './ContactList.module.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from '../../redux/contaktsOperation';
import { getContacts } from '../../redux/mySlice/myPhoneBookSlice';

function ContactList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const { contacts, filter, error } = useSelector(getContacts);

  const onDeleteContactClick = contactId => {
    dispatch(deleteContact(contactId));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts?.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <ul className={styles.contactsList}>
      {error && <div>Something went wrong, please, try again</div>}
      {visibleContacts?.map(({ id, name, number }) => (
        <li key={id} className={styles.contactItem}>
          &#160;&#160;&#128512;&#160;{name}&#160;-&#160;&#9743; {number}
          <button
            className={styles.btnContact}
            onClick={() => onDeleteContactClick(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
