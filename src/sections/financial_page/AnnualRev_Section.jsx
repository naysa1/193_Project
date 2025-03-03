import React from 'react';
import './AnnualRev_Section.css';
import BarChartComponent from './BarChart1';

const AnnualRev_Section = () => {
  return (
    <section className="annual_rev_container">
      <h1 className="header1_1">Annual Revenue</h1>
      <hr />
      <div className="container-content">
        <p className="left-text">
        In 2023, iRobot's annual revenue was approximately $890.58 million, representing a decline of 24.74% from the previous year. (Stock Analysis) This decrease underscores the company's recent financial hurdles.
        </p>
        <div className="right-graph"> 
          <BarChartComponent />
        </div>
      </div>
    </section>
  );
};

export default AnnualRev_Section;
