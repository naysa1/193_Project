// import React from 'react';
// import './Navbar.css';  // Import the specific CSS file

// const Navbar = () => {
//   return (
//     <div className="navbar-container">
//         <div className="home-button">
//             <a href="/" className="navbar-content">HOME</a>
//         </div>
//         <div className="other-buttons">
//             <a href="" className="navbar-content">FINANCIAL</a>
//             <a href="" className="navbar-content">ANALYSIS</a>
//             <a href="" className="navbar-content">STORIES</a>
//         </div>
//         <div className="empty-space"></div>
//     </div>
//   );
// }

// export default Navbar;

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
            <a href="" className="navbar-content">FINANCIAL</a>
            <a href="" className="navbar-content">ANALYSIS</a>
            <a href="" className="navbar-content">STORIES</a>
        </div>
        <div className="empty-space"></div>
    </div>
  );
}

export default Navbar;

