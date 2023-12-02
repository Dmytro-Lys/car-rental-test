import { Navlink } from 'components/NavLink';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div>
      <Navlink className={css.link} to="/register">
        Register
      </Navlink>
      <Navlink className={css.link} to="/login">
        Log In
      </Navlink>
    </div>
  );
};