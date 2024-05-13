import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <h2 className='my-logo' onClick={() => setIsMenuOpen(false)}>
      <span id='logs'> <NavLink to='/'> My Port<span id='log-red'>folio</span></NavLink></span>
      </h2>
      <div className='hamburger' onClick={toggleMenu}>
        &#9776;
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li onClick={() => setIsMenuOpen(false)}>
          <NavLink to='/Projects'>My Projects</NavLink>
        </li>
        <li onClick={() => setIsMenuOpen(false)}>
          <NavLink to='/Skills'>Skills</NavLink>
        </li>
        <li onClick={() => setIsMenuOpen(false)}>
          <NavLink to='/Contact'>Contact Me</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
