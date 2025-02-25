// import React, { useState } from "react";

// const AboutSection = () => {
//   const [openDropdown, setOpenDropdown] = useState(0); // 0 is the default open dropdown

//   const toggleDropdown = (index) => {
//     setOpenDropdown(index === openDropdown ? null : index);
//   };

//   const dropdownData = [
//     {
//       title: "Mission, Vision, & Values",
//       content: (
//         <>
//           <strong>Mission:</strong> Empower people to do more. <br />
//           <a href="https://investor.irobot.com" target="_blank" rel="noopener noreferrer">investor.irobot.com</a>
//           <strong>Vision:</strong> To build the world’s most thoughtful and intelligent home innovations that make life better. <br />
//           <a href="https://investor.irobot.com" target="_blank" rel="noopener noreferrer">investor.irobot.com</a>
//           <strong>Values:</strong> iRobot's core values include putting consumers first, pursuing possibility, moving with urgency, owning the outcome, debating and committing, and having each other's back. <br />
//           <a href="https://www.comparably.com" target="_blank" rel="noopener noreferrer">Comparably</a>
//         </>
//       )
//     },
//     {
//       title: "Key Milestones",
//       content: (
//         <>
          // <strong>1990:</strong> iRobot is founded by Rodney Brooks, Colin Angle, and Helen Greiner. <br />
          // <a href="https://www.irobot.com" target="_blank" rel="noopener noreferrer">iRobot</a>
          // <strong>2002:</strong> Launch of the first Roomba robot vacuum, revolutionizing home cleaning. <br />
          // <a href="https://investor.irobot.com" target="_blank" rel="noopener noreferrer">investor.irobot.com</a>
          // <strong>2012:</strong> Acquisition of Evolution Robotics, enhancing floor-cleaning technology. <br />
          // <a href="https://www.wikipedia.org" target="_blank" rel="noopener noreferrer">Wikipedia</a>
          // <strong>2021:</strong> Acquisition of Aeris Cleantec AG, expanding into air purification. <br />
          // <a href="https://www.wikipedia.org" target="_blank" rel="noopener noreferrer">Wikipedia</a>
//         </>
//       )
//     },
//     {
//       title: "Flagship Products",
//       content: (
//         <>
          // <strong>Roomba Series:</strong> Autonomous robot vacuums with advanced navigation and cleaning capabilities. 
          // <strong>Braava Series:</strong> Robot mops designed for efficient floor cleaning.
          // <strong>Root Coding Robot:</strong> An educational robot that introduces coding concepts to learners.
//         </>
//       )
//     },
//     {
//       title: "Leadership Team",
//       content: (
//         <>
          // <strong>Gary Cohen:</strong> Chief Executive Officer since May 2024. 
          // <strong>Julie Zeiler:</strong> Chief Financial Officer. 
          // <strong>Jean Jacques (JJ) Blanc:</strong> Chief Commercial Officer, leading global go-to-market strategies. 
          // <a href="https://www.irobot.com" target="_blank" rel="noopener noreferrer">iRobot</a>
//         </>
//       )
//     },
//     {
//       title: "Contact Information",
//       content: (
//         <>
          // <strong>Headquarters:</strong> 8 Crosby Drive, Bedford, Massachusetts 01730, USA. <br />
          // <a href="https://www.leadiq.com" target="_blank" rel="noopener noreferrer">LeadIQ</a>
          // <strong>Website:</strong> <a href="https://www.irobot.com" target="_blank" rel="noopener noreferrer">www.irobot.com</a>
//         </>
//       )
//     }
//   ];

//   return (
//     <section className="about-section">
//       <h2 className="tile-header">About the Company</h2>
//       <div className="about-content">
//         <div className="about-left">
//           <img src="./src/assets/img1.png" alt="Company" />
//         </div>
//         <div className="about-right">
//           <div className="dropdown-container">
//             {dropdownData.map((item, index) => (
//               <div key={index}>
//                 <button
//                   className={`dropdown ${openDropdown === index ? "expanded" : ""}`}
//                   onClick={() => toggleDropdown(index)}
//                 >
//                   {item.title}
//                 </button>
//                 <div className={`dropdown-content ${openDropdown === index ? "expanded" : ""}`}>
//                   <p>{item.content}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;

import React, { useState } from 'react';
import './styles/AboutSection.css';

const AboutSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="about-section">
      <h2 className="tile-header">About the Company</h2>
      <div className="about-content">
        <div className="about-left">
          <img src="[image placeholder]" alt="Company" className="w-full" />
        </div>
        <div className="about-right">
          <div className="dropdown-container">
            <button 
              className={`dropdown ${isExpanded ? 'expanded' : ''}`} 
              onClick={() => setIsExpanded(!isExpanded)}
            >
              Select an Option
            </button>
            <div className={`dropdown-content ${isExpanded ? 'expanded' : ''}`}>
              <p>
                <strong>Mission:</strong> Empower people to do more.
                <a href="https://investor.irobot.com" target="_blank" rel="noopener noreferrer">investor.irobot.com</a>
                <strong>Vision:</strong> To build the world’s most thoughtful and intelligent home innovations that make life better.
                <a href="https://investor.irobot.com" target="_blank" rel="noopener noreferrer">investor.irobot.com</a>
                <strong>Values:</strong> iRobot's core values include putting consumers first, pursuing possibility, moving with urgency, owning the outcome, debating and committing, and having each other's back. <br />
                <a href="https://www.comparably.com" target="_blank" rel="noopener noreferrer">Comparably</a>
                </p>
              <p>
                <strong>1990:</strong> iRobot is founded by Rodney Brooks, Colin Angle, and Helen Greiner. 
                <a href="https://www.irobot.com" target="_blank" rel="noopener noreferrer">iRobot</a>
                <strong>2002:</strong> Launch of the first Roomba robot vacuum, revolutionizing home cleaning. 
                <a href="https://investor.irobot.com" target="_blank" rel="noopener noreferrer">investor.irobot.com</a>
                <strong>2012:</strong> Acquisition of Evolution Robotics, enhancing floor-cleaning technology. 
                <a href="https://www.wikipedia.org" target="_blank" rel="noopener noreferrer">Wikipedia</a>
                <strong>2021:</strong> Acquisition of Aeris Cleantec AG, expanding into air purification. 
                <a href="https://www.wikipedia.org" target="_blank" rel="noopener noreferrer">Wikipedia</a>
              </p>
              <p>
                <strong>Roomba Series:</strong> Autonomous robot vacuums with advanced navigation and cleaning capabilities. 
                <strong>Braava Series:</strong> Robot mops designed for efficient floor cleaning.
                <strong>Root Coding Robot:</strong> An educational robot that introduces coding concepts to learners.
              </p>
              <p>
                <strong>Gary Cohen:</strong> Chief Executive Officer since May 2024. 
                <strong>Julie Zeiler:</strong> Chief Financial Officer. 
                <strong>Jean Jacques (JJ) Blanc:</strong> Chief Commercial Officer, leading global go-to-market strategies. 
                <a href="https://www.irobot.com" target="_blank" rel="noopener noreferrer">iRobot</a>
              </p>
              <p>
                <strong>Headquarters:</strong> 8 Crosby Drive, Bedford, Massachusetts 01730, USA. <br />
                <a href="https://www.leadiq.com" target="_blank" rel="noopener noreferrer">LeadIQ</a>
                <strong>Website:</strong> <a href="https://www.irobot.com" target="_blank" rel="noopener noreferrer">www.irobot.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
