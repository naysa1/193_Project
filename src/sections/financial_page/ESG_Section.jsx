import React from 'react';
import './ESG_Section.css';
import BarChartComponent from './BarChart2';



const ESG_Section = () => {
  return (
    <section className="esg_score_container">
      <h1 className="header1_3">ESG Scores</h1>
      <hr />
      <div className="container-content">
        <div className="left-graph"> 
            <BarChartComponent />
        </div>
        <p className="right-text">
        An ESG score, which stands for Environmental, Social, and Governance score, is a metric used to evaluate a company's performance across these three key areas, essentially assessing its sustainability and ethical practices by looking at its environmental impact, social responsibility, and corporate governance standards; it's a way for investors to compare a company's sustainability efforts against its industry peers. iRobot holds an ESG Risk Rating of +16.6%, categorized as "Medium" risk. This rating reflects a balanced exposure to environmental, social, and governance risks, with room for improvement in managing these areas
        </p>
      </div>
    </section>
  );
};

export default ESG_Section;