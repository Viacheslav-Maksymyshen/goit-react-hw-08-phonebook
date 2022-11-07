import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchCurrentUser } from 'redux/authOperations';
import { getAuth } from 'redux/mySlice/authSlice';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';
import { Layout } from './Layout/Layout';
import { Loader } from './Loader/Loader';
const Home = lazy(() => import('pages/HomePage'));
const Phonebook = lazy(() => import('pages/Phonebook/Phonebook'));
const RegisterForm = lazy(() => import('pages/RegisterForm/RegistrForm'));
const LoginForm = lazy(() => import('pages/LoginForm/loginForm'));
const PageNotFound = lazy(() => import('pages/NotFoundPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isLoadingUser } = useSelector(getAuth);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isLoadingUser ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <RegisterForm />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <LoginForm />
                </PublicRoute>
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <Phonebook />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      )}
      <ToastContainer autoClose={1000} />
    </>
  );
};
