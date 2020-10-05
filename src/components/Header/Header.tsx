import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

import { ShoppingCart, Search, Menu, Close } from '@material-ui/icons';

import { navLinks } from './headerLinks';

const { REACT_APP_BRAND_NAME } = process.env;

interface Props {
  isDark: boolean;
}

const Header: React.FC<Props> = ({ isDark }) => {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };
  const closeNav = () => {
    if (navOpen) setNavOpen(false);
  };
  return (
    <header className={`header ${isDark ? 'header--text-dark' : ''}`}>
      <div className="header__content container">
        <Link onClick={closeNav} to="/" className="header__logo">
          {REACT_APP_BRAND_NAME}
        </Link>
        <nav className={`header__nav ${navOpen && 'header__nav--open'}`}>
          {navLinks.map(({ text, link }) => (
            <Link onClick={closeNav} to={link} className="header__navLink">
              {text}
            </Link>
          ))}
        </nav>
        {/* <div className="header__action">
          <Search />
        </div> */}
        <Link onClick={closeNav} to="/cart" className="header__action">
          <ShoppingCart />
        </Link>
        <div onClick={toggleNav} className="header__action">
          {navOpen ? <Close fontSize="large" /> : <Menu fontSize="large" />}
        </div>
      </div>
    </header>
  );
};

export default Header;
