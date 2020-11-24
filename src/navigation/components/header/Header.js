import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => (
  <header className="App-header">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
    </ul>
  </header>
);

export default Header;
