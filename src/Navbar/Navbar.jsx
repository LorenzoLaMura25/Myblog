import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
          <ul className='navbar-links'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contacts'>Contacts</Link>
            </li>
            <li>
              <Link to='/projects'>Projects</Link>
            </li>
            <li>
              <Link to='/resumee'>Resumee</Link>
            </li>
          </ul>
      </nav>
    </>
  );
}

export default Navbar;
