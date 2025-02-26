import React, { useState } from "react";
import img1 from "../assets/img1.png"; // Ensure correct path
import "./AboutSection.css"; // Make sure the CSS is correctly imported

const AboutSection = () => {
  const [openDropdown, setOpenDropdown] = useState(0); // Ensure one dropdown stays open

  const dropdownData = [
    {
      title: "Mission, Vision, & Values",
      content: (
        <>
          <strong>Mission:</strong> Empower people to do more.<br />
          <strong>Vision:</strong> To build the world’s most thoughtful and intelligent home innovations that make life better. <br />
          <strong>Values:</strong> iRobot's core values include putting consumers first, pursuing possibility, moving with urgency, owning the outcome, debating and committing, and having each other's back. 
        </>
      ),
    },
    {
      title: "Key Milestones",
      content: (
        <>
          <strong>1990:</strong> iRobot is founded by Rodney Brooks, Colin Angle, and Helen Greiner. <br />
          <strong>2002:</strong> Launch of the first Roomba robot vacuum, revolutionizing home cleaning. <br />
          <strong>2012:</strong> Acquisition of Evolution Robotics, enhancing floor-cleaning technology. <br />
          <strong>2021:</strong> Acquisition of Aeris Cleantec AG, expanding into air purification. <br />
        </>
      ),
    },
    {
      title: "Flagship Products",
      content: (
        <>
          <strong>Roomba Series:</strong> Autonomous robot vacuums with advanced navigation and cleaning capabilities. <br />
          <strong>Braava Series:</strong> Robot mops designed for efficient floor cleaning. <br />
          <strong>Root Coding Robot:</strong> An educational robot that introduces coding concepts to learners.
        </>
      ),
    },
    {
      title: "Leadership Team",
      content: (
        <>
          <strong>Gary Cohen:</strong> Chief Executive Officer since May 2024. <br />
          <strong>Julie Zeiler:</strong> Chief Financial Officer. <br />
          <strong>Jean Jacques (JJ) Blanc:</strong> Chief Commercial Officer, leading global go-to-market strategies. 
        </>
      ),
    },
    {
      title: "Contact Information",
      content: (
        <>
          <strong>Headquarters:</strong> 8 Crosby Drive, Bedford, Massachusetts 01730, USA. <br />
        </>
      ),
    },
  ];

  return (
    <section className="about-section">
      <h2 className="tile-header">About the Company</h2>
      <div className="about-content">
        <div className="about-left">
          <img src={img1} alt="Company" />
        </div>
        <div className="about-right">
          <div className="dropdown-container">
            {dropdownData.map((item, index) => (
              <div key={index} className="dropdown-item">
                <button
                  className={`dropdown ${openDropdown === index ? "expanded" : ""}`}
                  onClick={() => setOpenDropdown(index)} // Always ensures one is open
                >
                  {item.title}
                </button>
                <div className={`dropdown-content ${openDropdown === index ? "expanded" : ""}`}>
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
