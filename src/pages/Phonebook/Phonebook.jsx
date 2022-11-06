import ContactForm from '../../components/ContactForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Filter from '../../components/Filter';
import ContactList from '../../components/ContactList';
import styles from './Phonebook.module.css';

export default function Phonebook() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.titleContacts}>Contacts</h2>
      <Filter />
      <ContactList />
      <ToastContainer autoClose={1000} />
    </div>
  );
}
