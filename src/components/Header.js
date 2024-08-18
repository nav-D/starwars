
import React from 'react';
import './Header.css'; // Make sure this path is correct
import logoImage from "../logo.png"

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <a href="/" className="logo">
          <img src={logoImage} alt="Logo" className="logo-img" />
        </a>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="/characters" className="nav-link">Characters</a></li>
            <li className="nav-item"><a href="/contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;