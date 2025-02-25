import React from 'react';
import './Navbar.css';  // Import the specific CSS file

const Navbar = () => {
  return (
    <div className="navbar-container">
        <div className="home-button">
            <a href="/" className="navbar-content">HOME</a>
        </div>
        <div className="other-buttons">
            <a href="" className="navbar-content">FINANCIAL</a>
            <a href="" className="navbar-content">ANALYSIS</a>
            <a href="" className="navbar-content">STORIES</a>
        </div>
        <div className="empty-space"></div>
    </div>
  );
}

export default Navbar;