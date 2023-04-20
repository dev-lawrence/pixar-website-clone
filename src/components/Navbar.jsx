import { NavLink } from 'react-router-dom';
import Dropdown from './Dropdown';

const Navbar = ({ click, dropdown, setDropdown }) => {
  const onMouseEnter = () => {
    if (window.innerWidth < 1200) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 1200) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className={`nav ${click ? 'showMenu' : ''}`}>
        <div className="menu">
          <li>
            <NavLink to="/feature">feature films</NavLink>
          </li>
          <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <NavLink to="/shortfilms">short films</NavLink>
            {dropdown && <Dropdown />}
          </li>
          <li>
            <a href="./event.html">technology</a>
          </li>
          <li>
            <a href="./about.html">careers</a>
          </li>
          <li>
            <a href="./contact.html">extras</a>
          </li>

          <li>
            <a href="./contact.html">about</a>
          </li>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
