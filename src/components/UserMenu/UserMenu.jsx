import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAuth } from 'redux/mySlice/authSlice';
import { logoutUser } from 'redux/authOperations';
import { NavLink, useNavigate } from 'react-router-dom';
import style from '../UserMenu/UserMenu.module.css';

export const UserMenu = () => {
  const { user, isLoggedIn } = useSelector(getAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogoutClick = () => {
    dispatch(logoutUser());
    navigate('/login');
  };

  const getClassName = ({ isActive }) => {
    return isActive ? `${style.link} ${style.active}` : style.link;
  };

  return (
    <nav className={style.navWrapper}>
      {isLoggedIn && (
        <NavLink className={style.link} to="/contacts">
          Contacts
        </NavLink>
      )}
      {isLoggedIn ? (
        <div className={style.userWrapper}>
          <p className={style.greeting}>{`Hello, ${user.name}!`}</p>
          <button className={style.link} type="button" onClick={onLogoutClick}>
            Log Out
          </button>
        </div>
      ) : (
        <div className={style.menuWrapper}>
          <NavLink className={getClassName} to="/register">
            Sign Up
          </NavLink>
          <NavLink className={getClassName} to="/login">
            Log In
          </NavLink>
        </div>
      )}
    </nav>
  );
};
