import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => (
  <header className="header">
    <ul className="header__navigation">
      <li className="header__navigation__brand">
        <Link to="/">TVMaze</Link>
      </li>
    </ul>
  </header>
);

export default Header;
