import { NavigationLink } from './Navigation.styled';
import { useAuth } from 'hooks';


export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavigationLink to="/">Home</NavigationLink>
      {isLoggedIn && <NavigationLink to="/contacts">Contacts</NavigationLink>}
    </nav>
  );
};
