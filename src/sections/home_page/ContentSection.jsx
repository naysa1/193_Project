import React from 'react';
import { Link } from 'react-router-dom'; 
import './ContentSection.css';

const ContentSection = () => {
  return (
    <section className="content-section">
      <h2 className="title">Website's Content</h2>
      <div className="content-tiles">
        <div className="content-tile">
          <h3 className="tile-mini-title">Financial</h3>
          <p className="tile-content">A page that overviews benchmarking information regarding financial statistics</p>
          <Link to="/Financial">
            <button className="tile-button">Read More</button>
          </Link>
        </div>
        <div className="content-tile">
          <h3 className="tile-mini-title">Analysis</h3>
          <p className="tile-content">A page that overviews industry & company analysis for the smart cleaning robotic market</p>
          <Link to="/Analysis">
            <button className="tile-button">Read More</button>
          </Link>
        </div>
        <div className="content-tile">
          <h3 className="tile-mini-title">Stories</h3>
          <p className="tile-content">A page that categorizes recent news regarding iRobot as well as providing investor insights</p>
          <Link to="/Stories">
            <button className="tile-button">Read More</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ContentSection;
