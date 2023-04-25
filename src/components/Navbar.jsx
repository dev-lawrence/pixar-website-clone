import { NavLink } from 'react-router-dom';
import NavLinks from './NavLinks';

const Navbar = ({ click }) => {
  return (
    <>
      <nav className={`nav ${click ? 'showMenu' : ''}`}>
        <ul className="menu">
          <li>
            <NavLink to="/feature">feature films</NavLink>
          </li>
          <NavLinks />
          {/* <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <NavLink to="/shortfilms">short films</NavLink>
            {dropdown && <Dropdown />}
          </li> */}
          {/* <li>
            <a href="./event.html">technology</a>
          </li> */}
          {/* <li>
            <a href="./about.html">careers</a>
          </li> */}
          {/* <li>
            <a href="./contact.html">extras</a>
          </li> */}

          {/* <li>
            <a href="./contact.html">about</a>
          </li> */}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
