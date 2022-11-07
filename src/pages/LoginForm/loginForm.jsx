import { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { getAuth } from 'redux/mySlice/authSlice';
import { loginUser } from 'redux/authOperations';
import styles from '../../components/ContactForm/ContactForm.module.css';
import s from '../Phonebook/Phonebook.module.css';
import { Loader } from '../../components/Loader/Loader';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
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

    dispatch(loginUser({ email: email, password: password }));
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const emailId = useMemo(() => nanoid(), []);
  const passwordId = useMemo(() => nanoid(), []);

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Login</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
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
          className={styles.inputForm}
        />
        {!isLoading ? (
          <button type="submit" className={styles.btnForm}>
            Log In
          </button>
        ) : (
          <Loader />
        )}
      </form>
    </div>
  );
};

export default LoginForm;
