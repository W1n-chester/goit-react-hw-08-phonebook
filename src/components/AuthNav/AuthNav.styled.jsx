import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom'
export const AuthLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;
  &:hover,
  &:focus,
  &.active {
    color: #e84a5f;
  }
`;