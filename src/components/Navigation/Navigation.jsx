import { Navlink } from 'components/NavLink';
// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './Navigation.module.css';

export const Navigation = () => {
  // const isLoggedIn  = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <Navlink className={css.link} to="/">
        Home
      </Navlink>
      <Navlink className={css.link} to="/catalog">
          Catalog
      </Navlink>
      <Navlink className={css.link} to="/favorites">
          Favorites
        </Navlink>
    </nav>
  );
};