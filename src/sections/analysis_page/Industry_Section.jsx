import React from 'react';
import './Industry_Section.css';
import porter_model from "../../assets/porter_model.png"; // Ensure correct path

const Industry_Section = () => {
  return (
    <section className = "industry_section">
      <div className="industry_title">Industry Analysis</div>
      <hr />
      <div className="porter">
        <img src={porter_model} alt="Porter Model" />
      </div>
      <div className="determinant-table">
        <table className="d_tab">
          <tr>
            <th>Force</th>
            <th>Key Determinants</th>
            <th>Force Intensity</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>Rivalry between competitors</td>
            <td>Concentration of competitors is low; High fixed price</td>
            <td>High</td>
            <td>iRobot faces significant competition from well-established competitors in this space. Competition is fierce both for technology and price leadership.</td>
          </tr>
          <tr>
            <td>Barriers to Entry</td>
            <td>Economies of scale; Capital requirement</td>
            <td>Medium - High</td>
            <td>Barriers to entry are high given the initial investment required to enter into and develop automated cleaning products. Existing companies in this market are slightly insulated by their investment into manufacturing apparatus and benefit from economies of scale.</td>
          </tr>
          <tr>
            <td>Threat of Substitutes</td>
            <td>Price/performance substitutes; Switching costs</td>
            <td>Low - Medium</td>
            <td>Few direct substitutes for robotic vacuums but traditional vacuums and alternative cleaning technologies exist.</td>
          </tr>
          <tr>
            <td>Supplier Power</td>
            <td>Supplier concentration; size</td>
            <td>Medium - High</td>
            <td>Some dependency on specialized suppliers (e.g., for sensors, chips), giving suppliers moderate to high negotiating power.</td>
          </tr>
          <tr>
            <td>Buyer Power</td>
            <td>Buyer concentration; cost</td>
            <td>High</td>
            <td>Consumers have many options, both in terms of product type and companies, leading to significant price competition.</td>
          </tr>
          <tr>
            <td>Power to Influence</td>
            <td>Concentrations in competitors; concentration in suppliers</td>
            <td>Low - Medium</td>
            <td>Buyers and suppliers both have influence, but iRobot’s established market position limits extreme shifts. </td>
          </tr>
        </table>
      </div>
    </section>
  );
};

export default Industry_Section;
