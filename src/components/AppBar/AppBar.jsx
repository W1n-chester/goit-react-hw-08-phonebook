import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { Header } from './AppBar.styled';
// import { useAuth } from 'hooks';
// import css from './AppBar.module.css';

export const AppBar = () => {
  //   const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Navigation />
      <UserMenu />
      <AuthNav />
    </Header>
  );
};
