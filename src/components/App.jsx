import ContactForm from './ContactForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Filter from './Filter';
import ContactList from './ContactList';
import styles from './App.module.css';

export default function App() {
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
