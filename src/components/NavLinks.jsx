import { useState } from 'react';
import { MenuLinks } from './MenuLinks';
import { Link, NavLink } from 'react-router-dom';

const NavLinks = () => {
  const [activeMenuIndex, setActiveMenuIndex] = useState(null);
  const [click, setClick] = useState(false);

  const handleMenuEnter = (index) => {
    setActiveMenuIndex(index);
  };

  const handleMenuLeave = () => {
    setActiveMenuIndex(null);
  };

  const handleClick = () => {
    setClick(!click);
  };

  //   const onMouseEnter = () => {
  //     if (window.innerWidth < 1200) {
  //       setDropdown(false);
  //     } else {
  //       setDropdown(true);
  //     }
  //   };

  //   const onMouseLeave = () => {
  //     if (window.innerWidth < 1200) {
  //       setDropdown(false);
  //     } else {
  //       setDropdown(false);
  //     }
  //   };

  return (
    <>
      {MenuLinks.map((link, index) => {
        return (
          <li
            key={index}
            onMouseEnter={() => handleMenuEnter(index)}
            onMouseLeave={handleMenuLeave}
          >
            <NavLink to={link.path}>{link.name}</NavLink>

            {link.subMenus && activeMenuIndex === index && (
              <ul
                className={click ? `${link.cName} clicked` : link.cName}
                onClick={handleClick}
              >
                {link.subMenus.map((subMenu, subIndex) => (
                  <li key={subIndex}>
                    <Link to={subMenu.path} className={subMenu.cName}>
                      {subMenu.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
