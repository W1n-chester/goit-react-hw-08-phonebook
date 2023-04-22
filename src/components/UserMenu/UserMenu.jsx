import { useDispatch } from 'react-redux';
import { Wrapper, Username } from './UserMenu.styled';
// import { logOut } from 'redux/auth/operations';
// import { useAuth } from 'hooks';
// import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
//   const { user } = useAuth();

  return (
    <Wrapper >
      <Username >Welcome, </Username>
      <button type="button" onClick={() => dispatch('logOut()')}>
        Logout
      </button>
    </Wrapper>
  );
};
