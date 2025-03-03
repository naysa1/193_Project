import React from 'react';
import './HeroSection.css';
import RobotModel from './3DModel';


const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <h1 className="header1">Welcome to</h1>
        <h2 className="header2">iRobot's Breakdown</h2>
      </div>
      <div className="hero-right">
        <RobotModel />
      </div>
    </section>
  );
}

export default HeroSection;
