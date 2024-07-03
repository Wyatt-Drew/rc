import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import logo from '../../assets/logo.jfif'; // Ensure you have a logo image in the assets folder

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li><Link to="hero" smooth={true} duration={500} className="navbar-link">Home</Link></li>
        <li><Link to="for-sale" smooth={true} duration={500} className="navbar-link">Buy</Link></li>
        <li><Link to="footer" smooth={true} duration={500} className="navbar-link">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
