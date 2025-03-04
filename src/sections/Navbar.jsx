import React, { useState, useEffect } from 'react';
import './Navbar.css';  // Import the specific CSS file

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true); // Change navbar style when scrolled
      } else {
        setIsScrolled(false); // Revert to default
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar-container ${isScrolled ? "scrolled" : ""}`}>
        <div className="home-button">
            <a href="/" className="navbar-content">HOME</a>
        </div>
        <div className="other-buttons">
            <a href="/Financial" className="navbar-content">FINANCIAL</a>
            <a href="/Analysis" className="navbar-content">ANALYSIS</a>
            <a href="/Stories" className="navbar-content">STORIES</a>
        </div>
    </div>
  );
}

export default Navbar;

