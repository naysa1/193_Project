import React from 'react';
import './ProfitMargin_Section.css';
import LineChartComponent from './LineChart1';


const ProfitMargin_Section = () => {
  return (
    <section className="profit_margin_container">
      <h1 className="header1_2">Profit Margin</h1>
      <hr />
      <div className="container-content">
        <div className="left-graph"> 
          <LineChartComponent />
        </div>
        <p className="right-text">
        As of September 30, 2024, iRobot reported a net profit margin of -16.15%, indicating a net loss relative to its revenue. (Macrotrends) This negative margin reflects ongoing challenges in maintaining profitability.
        </p>
      </div>
    </section>
  );
};

export default ProfitMargin_Section;