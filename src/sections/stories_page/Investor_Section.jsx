// 
import React, { useState, useRef, useEffect } from 'react';
import StockChart from './StockChart.jsx'; 
import PEChart from './PEChart.jsx';  
import EquityChart from './EquityChart.jsx';
import ForecastingChart from './ForecastingChart.jsx'
import './Investor_Section.css';

const charts = [
  { 
    Component: StockChart, 
    title: 'Stock Performance', 
    text: 'iRobot’s stock performance has been volatile over the past year, with significant fluctuations in its share price. The stock started strong in early 2023 but experienced a decline, especially in the second half of the year. This downward trend has continued into 2024, reflecting market concerns about the company’s growth prospects. The stock is currently trading at a significant discount compared to its previous highs, which may indicate investor uncertainty or a shift in market expectations for iRobot’s future performance.'
  },
  { 
    Component: PEChart, 
    title: 'P/E Ratio', 
    text: 'iRobot’s Price-to-Earnings (P/E) ratio is currently not available, as the company has reported negative earnings for the past year. A negative P/E ratio indicates that the company has been operating at a loss and has not been able to generate sufficient profits to sustain its valuation. This is a concern for investors, as it suggests that the company is struggling to maintain profitability, which could limit its potential for long-term growth.'
  },
  { 
    Component: EquityChart, 
    title: 'Equity Chart', 
    text: 'iRobot’s equity has seen a decline, with a significant decrease in shareholders’ equity year-over-year. This reduction in equity indicates that the company has experienced losses, which may be a result of operational challenges, higher expenses, or reduced revenue generation. The negative trend in equity suggests that iRobot may face challenges in financing its operations without external investment or credit support, potentially impacting its ability to invest in innovation or growth initiatives.'
  },
  { 
    Component: ForecastingChart, 
    title: 'Earnings Per Share (EPS)', 
    text: 'iRobot’s earnings per share (EPS) has been negative for multiple quarters, indicating that the company has not been able to generate profits on a per-share basis. Analysts have also been adjusting their earnings forecasts downward, as seen in the reported versus estimated EPS figures for recent quarters. The company has the ability to recover and return to profitability remains uncertain, with analysts projecting further challenges in the short-term. This is a key factor for investors to watch, as sustained negative EPS could continue to hurt investor confidence in iRobot’s financial outlook.'
  },
];

const Investor_Section = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollX = scrollRef.current.scrollLeft;
    const containerWidth = scrollRef.current.clientWidth;
    const itemWidth = scrollRef.current.scrollWidth / charts.length;
    const centerPosition = scrollX + containerWidth / 2;

    let closestIndex = 0;
    let minDistance = Infinity;
    charts.forEach((_, index) => {
      const chartCenter = index * itemWidth + itemWidth / 2;
      const distance = Math.abs(chartCenter - centerPosition);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="investor-section">
      <div className="investor-title">Investor Insights</div>
      <hr />
      <div className="insight-section">
        <div
          className="chart-carousel"
          ref={scrollRef}
          style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}
        >
          {charts.map((chart, index) => (
            <div
              key={index}
              className={`chart-container ${activeIndex === index ? 'active' : ''}`}
            >
              <chart.Component />
            </div>
          ))}
        </div>
        <div className="text-title">
          {charts[activeIndex]?.title}
        </div>
        <hr />
        <div className="text-section">
          <p>{charts[activeIndex]?.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Investor_Section;
