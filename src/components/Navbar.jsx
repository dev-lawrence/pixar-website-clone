import { NavLink } from 'react-router-dom';

const Navbar = ({ click }) => {
  return (
    <>
      <nav className={`nav ${click ? 'showMenu' : ''}`}>
        <div className="menu">
          <li>
            <NavLink to="/feature">feature films</NavLink>
          </li>
          <li>
            <a href="./room.html">short films</a>
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
