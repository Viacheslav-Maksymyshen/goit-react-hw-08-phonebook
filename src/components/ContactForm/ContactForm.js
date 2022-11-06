import { useState } from 'react';

import styles from './ContactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/mySlice/myPhoneBookSlice';
import { addContact } from '../../redux/contaktsOperation';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const { contacts, isLoading } = useSelector(getContacts);

  const repeatName = newName => {
    return contacts.find(
      contact => contact.name.toLowerCase() === newName.toLowerCase()
    );
  };

  const formSubmitHandler = (name, number) => {
    if (repeatName(name)) {
      return alert(`${name} is already in contacts`);
    }
    dispatch(addContact({ name, number }));
    reset();
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    formSubmitHandler(name, number);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Name
        <input
          className={styles.inputForm}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={styles.label}>
        Number
        <input
          className={styles.inputForm}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={styles.btnForm} type="submit">
        {isLoading ? 'Loading...' : 'Add contact'}
      </button>
    </form>
  );
}
