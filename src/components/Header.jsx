import { useState } from 'react';
import Logo from '../assets/img/logo.jpg';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick((prevClick) => !prevClick);
  };

  return (
    <>
      <header id="header-section">
        <div className="container">
          <div className="content d-flex">
            <Link to="/" className="logo">
              <img src={Logo} alt="" />
            </Link>

            {/* <!--NAV TOGGLE BUTTON--> */}
            <div onClick={handleClick} className="toggle-menu">
              <i
                className={click ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}
              ></i>
            </div>

            {/* <!--NAV MENU--> */}
            <Navbar click={click} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
