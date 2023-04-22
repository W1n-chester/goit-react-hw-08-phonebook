
import { NavigationLink } from './Navigation.styled';
// import { useAuth } from 'hooks';
// import css from './Navigation.module.css';

export const Navigation = () => {
  //   const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavigationLink to="/">Home</NavigationLink>

      <NavigationLink to="/contacts">Contacts</NavigationLink>
    </nav>
  );
};
