import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const Navbar = () => (
  <nav>
    <Header />
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      |
      <li>
        <Link to="/Calculator">Calculator</Link>
      </li>
      |
      <li>
        <Link to="/Quote">Quote</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
