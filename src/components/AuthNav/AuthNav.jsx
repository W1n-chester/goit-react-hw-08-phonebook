
import { AuthLink } from './AuthNav.styled';
// import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div>
      <AuthLink   to="/register">
        Register
      </AuthLink >
      <AuthLink   to="/login">
        Log In
      </AuthLink >
    </div>
  );
};
