import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
const HomePage = lazy(() => import('../pages/Home/Home'));
const PhoneBookPage = lazy(() => import('../pages/Phonebook/Phonebook'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
// import { Form } from './Form/Form';
// import { Phonebook, Contacts } from './App.styled';
// import { ContactList } from './Contact-List/Contact-list';

// const CONTACTS = JSON.parse(window.localStorage.getItem('contacts')) ?? [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

export const App = () => {
  //  const dispatch = useDispatch();

  //  useEffect(() => {
  //    dispatch(fetchContacts());
  //  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/contacts" element={<PhoneBookPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};
