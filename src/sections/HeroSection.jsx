import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <h1 className="header1">Welcome to</h1>
        <h2 className="header2">iRobot's Breakdown</h2>
      </div>
      <div className="hero-right">
        <p className="text-white text-xl">[ 3D model placeholder ]</p> {/* Replace with actual 3D model */}
      </div>
    </section>
  );
}

export default HeroSection;
