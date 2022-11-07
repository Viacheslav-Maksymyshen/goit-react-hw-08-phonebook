import { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { getAuth } from 'redux/mySlice/authSlice';
import { registerUser } from 'redux/authOperations';

import styles from '../../components/ContactForm/ContactForm.module.css';
import s from '../Phonebook/Phonebook.module.css';
import { Loader } from '../../components/Loader/Loader';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'userName':
        setName(value);
        break;
      case 'userEmail':
        setEmail(value);
        break;
      case 'userPassword':
        setPassword(value);
        break;
      default:
        reset();
    }
  };

  const dispatch = useDispatch();
  const { isLoading } = useSelector(getAuth);

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(registerUser({ name: name, email: email, password: password }));
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const nameId = useMemo(() => nanoid(), []);
  const emailId = useMemo(() => nanoid(), []);
  const passwordId = useMemo(() => nanoid(), []);

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Register</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label} htmlFor={nameId}>
          Name
        </label>
        <input
          id={nameId}
          type="text"
          name="userName"
          value={name}
          onChange={handleChange}
          required
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Jane"
          className={styles.inputForm}
        />
        <label className={styles.label} htmlFor={emailId}>
          Email
        </label>
        <input
          id={emailId}
          type="email"
          name="userEmail"
          value={email}
          onChange={handleChange}
          required
          placeholder="jane@sample.com"
          className={styles.inputForm}
        />
        <label className={styles.label} htmlFor={passwordId}>
          Password
        </label>
        <input
          id={passwordId}
          type="password"
          name="userPassword"
          value={password}
          onChange={handleChange}
          required
          placeholder="Type your password"
          title="The password must contain from 7  characters"
          className={styles.inputForm}
        />
        {!isLoading ? (
          <button type="submit" className={styles.btnForm}>
            Sign Up
          </button>
        ) : (
          <Loader />
        )}
      </form>
    </div>
  );
};

export default RegisterForm;
