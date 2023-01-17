import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import './Navbar.css';

const Navbar = () => (
  <nav className="navBar">
    <Header />
    <ul className="links">
      <li className="link">
        <Link to="/">Home</Link>
      </li>
      <li className="link">
        <Link to="/Calculator">Calculator</Link>
      </li>
      <li className="link">
        <Link to="/Quote">Quote</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
