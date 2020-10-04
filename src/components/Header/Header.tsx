import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

interface Props extends React.ComponentProps<'header'> {}

const Header: React.FC<Props> = () => {
  return (
    <header className='header'>
      <div className='header__content container'>
        <div className='header__logo'>CrowStorm</div>
        <nav className='header__nav'>
          <Link to='/' className='header__navLink'>
            Men
          </Link>
          <Link to='/' className='header__navLink'>
            Women
          </Link>
          <Link to='/' className='header__navLink'>
            Bags
          </Link>
        </nav>
        <div className='header__actions'></div>
      </div>
    </header>
  );
};

export default Header;
