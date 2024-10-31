// src/components/Header.jsx
import React from 'react';
import { FaCodepen } from 'react-icons/fa';
import './Header.css'; // Corrected the import path

const Header = () => (

  
  <header className="header">
    <div className="header-logo">
      C<FaCodepen className="logo-icon" />DEPEN
    </div>
    <input type="text" className="search-bar" placeholder="Search here..." />
    
    {/* Button container wrapping the buttons */}
    <div className="button-container">
      <button className="sign-up-btn">Sign Up</button>
      <button className="log-in-btn" >Log In</button>
    </div>
  </header>
);

export default Header;
