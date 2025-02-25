import React from 'react';
import './ContentSection.css';

const ContentSection = () => {
  return (
    <section className="content-section">
      <h2 className="title">Website's Content</h2>
      <div className="content-tiles">
        <div className="content-tile">
          <h3 className="tile-mini-title">Financial</h3>
          <p className="tile-content">A page that overviews benchmarking information regarding financial statistics</p>
          <button className="tile-button">Read More</button>
        </div>
        <div className="content-tile">
          <h3 className="tile-mini-title">Analysis</h3>
          <p className="tile-content">A page that overviews industry & company analysis for the smart cleaning robotic market</p>
          <button className="tile-button">Read More</button>
        </div>
        <div className="content-tile">
          <h3 className="tile-mini-title">Stories</h3>
          <p className="tile-content">A page that categorizes recent news regarding iRobot as well as providing investor insights</p>
          <button className="tile-button">Read More</button>
        </div>
      </div>
    </section>
  );
}

export default ContentSection;
