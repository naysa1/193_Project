import React, { useState } from 'react';
import './Recent_Section.css';

// const articles = {
//   "Executive Transitions & Leadership Changes": [
//     { title: "'iRobot Announces Executive Transitions'", summary: "Discusses changes in iRobot's executive team." },
//     { title: "'iRobot Picks Up Law Firm Partner as New Legal Chief'", summary: "Highlights the hiring of a new legal chief." },
//     { title: "'Roomba Maker iRobot Replaces GC for the Second Time in 12 Months'", summary: "Covers the replacement of the General Counsel for the second time in a year." },
//     { title: "'iRobot Names Michael J. Loparco to Board of Directors'", summary: "Reports the appointment of Michael J. Loparco to the board." },
//   ],
//   "Financial & Business Performance": [
//     { title: "'iRobot Announces Preliminary Fourth Quarter 2024 Financial Results'", summary: "Provides preliminary financial details for Q4 2024." },
//     { title: "'Is iRobot (NASDAQ:IRBT) Using Debt in a Risky Way?'", summary: "Analyzes the company’s debt usage and associated risks." },
//   ],
//   "Company Layoffs": [
//     { title: "'iRobot Lays Off Another 105 Employees'", summary: "Details a new round of layoffs affecting 105 employees." },
//   ],
//   "Founder Spotlight & Innovations": [
//     { title: "'iRobot Founder Reflects on Home Robot Familiar Machines and Magic'", summary: "Features the founder reflecting on iRobot’s journey and the future of robotics." },
//   ],
// };

const articles = {
    "Executive Transitions & Leadership Changes": [
      {
        title: "iRobot Announces Executive Transitions",
        summary: "iRobot has announced key changes in its executive leadership, including the departure of its current Chief Financial Officer (CFO) and Chief Legal Officer (CLO). These transitions come amid broader strategic shifts at the company, likely in response to recent financial struggles and operational challenges. The announcement reflects iRobot's efforts to stabilize its leadership team and navigate an increasingly competitive market.",
        author: "iRobot Corporation",
        link: "https://www.prnewswire.com/news-releases/irobot-announces-executive-transitions-302297001.html"
      },
      {
        title: "iRobot Picks Up Law Firm Partner as New Legal Chief",
        summary: "iRobot has appointed a new Chief Legal Officer, hiring a seasoned partner from a leading law firm. This move signals a strategic shift in the company's legal approach, possibly preparing for upcoming regulatory challenges, corporate restructuring, or intellectual property concerns. The new legal chief brings extensive experience in corporate governance and compliance, which could be crucial for iRobot as it faces ongoing market pressures.",
        author: "Author not specified",
        link: "https://www.law.com/corpcounsel/2025/01/13/irobot-picks-up-law-firm-partner-as-new-legal-chief-/?slreturn=2025012630243"
      },
      {
        title: "Roomba Maker iRobot Replaces GC for the Second Time in 12 Months",
        summary: "iRobot has replaced its General Counsel (GC) for the second time within a year, raising questions about instability within the company's legal department. The frequent leadership changes may indicate internal challenges, such as legal disputes, compliance issues, or broader corporate restructuring efforts. This transition reflects the company’s struggle to establish steady legal leadership during a tumultuous period.",
        author: "Author not specified",
        link: "https://www.globallegalpost.com/news/roomba-maker-irobot-replaces-gc-for-the-second-time-in-12-months-1400971718"
      },
      {
        title: "iRobot Names Michael J. Loparco to Board of Directors",
        summary: "iRobot has appointed Michael J. Loparco, a technology and operations executive, to its Board of Directors. Loparco brings extensive experience from his leadership roles in industrial automation and technology-driven businesses. His addition to the board suggests a focus on strengthening iRobot’s operational strategy, potentially in response to increasing competition in the home robotics market.",
        author: "iRobot Corporation",
        link: "https://www.prnewswire.com/news-releases/irobot-names-michael-j-loparco-to-board-of-directors-302220191.html"
      }
    ],
    "Financial & Business Performance": [
      {
        title: "iRobot Announces Preliminary Fourth-Quarter 2024 Financial Results",
        summary: "iRobot has reported preliminary financial results for Q4 2024, revealing a revenue of approximately $171 million and a GAAP operating loss of around $59 million. These figures indicate continued financial struggles, as the company faces declining sales and increased costs. The report suggests that iRobot is actively working on cost-cutting measures and restructuring efforts to mitigate further losses.",
        author: "Stock Titan",
        link: "https://www.stocktitan.net/news/IRBT/i-robot-announces-preliminary-fourth-quarter-2024-financial-2y5x5s7oqfse.html"
      },
      {
        title: "Is iRobot (NASDAQ:IRBT) Using Debt in a Risky Way?",
        summary: "A financial analysis of iRobot’s debt situation highlights concerns over the company's rising liabilities, which now exceed its market capitalization. The report explores whether iRobot’s debt levels pose a significant risk to its long-term stability, especially in light of its recent revenue declines. Investors may need to consider the company's ability to manage its financial obligations while sustaining innovation and competitive positioning in the robotics industry.",
        author: "Simply Wall St",
        link: "https://simplywall.st/stocks/us/consumer-durables/nasdaq-irbt/irobot/news/is-irobot-nasdaqirbt-using-debt-in-a-risky-way"
      }
    ],
    "Company Layoffs": [
      {
        title: "iRobot Lays Off Another 105 Employees",
        summary: "iRobot has announced another round of layoffs, cutting 105 employees—approximately 16% of its global workforce. This move is part of a larger cost-reduction strategy as the company struggles with financial challenges and declining sales. The layoffs primarily affect roles across multiple departments, signaling a significant restructuring effort. The decision follows previous workforce reductions, highlighting the ongoing difficulties iRobot faces in sustaining profitability and growth.",
        author: "Steve Crowe",
        link: "https://www.therobotreport.com/irobot-lays-off-another-105-employees/"
      }
    ],
    "Founder Spotlight & Innovations": [
      {
        title: "iRobot Founder Reflects on Home Robot Familiar Machines and Magic",
        summary: "Colin Angle, co-founder and former CEO of iRobot, discusses his new venture, Familiar Machines & Magic, which aims to develop emotionally intelligent home robots. His vision centers around creating robots that can form meaningful connections with users, moving beyond traditional household automation. The article provides insights into his departure from iRobot and his continued passion for advancing robotics to enhance daily life in more personal and intuitive ways.",
        author: "The Verge",
        link: "https://www.theverge.com/2024/12/17/24323439/irobot-founder-home-robot-familiar-machines-magic"
      }
    ]
  };
  
const Recent_Section = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <><div className="recent-title">
          Recent News
      </div><div className="recent-stories">
              <div className="article-list">
                  {Object.entries(articles).map(([category, articles]) => (
                      <div key={category}>
                          <h3>{category}</h3>
                          <hr />
                          <ul>
                              {articles.map((article, index) => (
                                  <li key={index} onClick={() => setSelectedArticle(article)}>
                                      {article.title}
                                  </li>
                              ))}
                          </ul>
                      </div>
                  ))}
              </div>
              <div className="article-summary">
                <div className="article-title">News View</div>
                  {selectedArticle ? (
                      <div>
                          <div className="modal-title"><u>Title:</u> "{selectedArticle.title}"</div>
                          <div className="modal-subtitle"><u>Author:</u> {selectedArticle.author}</div>
                          <div className="modal-content"><u>Summary:</u> {selectedArticle.summary}</div> 
                          <div className="modal-more">
                          <a href={selectedArticle.link} target="_blank" rel="noopener noreferrer"><u>Read More</u></a>
                          </div>
                          
                      </div>
                  ) : (
                      <p className="placeholder">Click an article to learn more</p>
                  )}
              </div>
          </div></>
  );
};

export default Recent_Section;
