import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.jfif'; // Updated to logo.jfif

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li><Link to="/" className="navbar-link">Home</Link></li>
        <li><Link to="/buy" className="navbar-link">Buy</Link></li>
        <li><a href="#contact" className="navbar-link">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
