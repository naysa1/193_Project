
import React from 'react';
import "./Company_Section.css";
import company from "../../assets/Company.png"

const Company_Section = () => {
  return (
    <section className="company_section">
        <div className="company_title">Company Analysis</div>
        <hr />
        <div className="company_content">
            <div className="left_image">
                <img src={company} alt="Company Model" />
            </div>
            <div className="right_content">
                <div className="right_up">
                    <div className="up_title">Technology Strategy</div>
                    <div className="up_content">
                        <table className="table1">
                            <tr>
                                <th>Definition</th>
                                <th>iRobot</th>
                            </tr>
                            <tr>
                                <td>What are the core technologies that give the company a technological advantage over its competitors?</td>
                                <td>
                                    <ul>
                                        <li>- Innovation with home electronics (cleaning)</li>
                                        <li>- New AI/ML technologies to make products more efficient</li>
                                        <li>- Increased connectivity and intelligence, to make robots more convenient for consumers</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>What is the company’s approach to product and technology development?</td>
                                <td>
                                    <ul>
                                        <li>- Research and development</li>
                                        <li>- Building an ecosystem of robots and technologies to enable the smart home through internal initiatives and strategic external partnerships</li>
                                    </ul>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="right_down">
                    <div className="down_title">Product/Market Strategy</div>
                    <div className="down_content">
                        <table className="table2">
                            <tr>
                                <th>Definition</th>
                                <th>Example (iRobot)</th>
                            </tr>
                            <tr>
                                <td>What differentiates the company’s products from its competitors?</td>
                                <td>
                                    <ul>
                                        <li>- Rapid product development (new product lines every 2 years, software updates every few weeks)</li>
                                        <li>- Premium pricing strategy with a range of options</li>
                                        <li>- Creating an ecosystem of smart robot cleaners</li>
                                        <li>- Strong patent portfolio providing a competitive advantage</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>What markets does the company serve?</td>
                                <td>
                                    <ul>
                                        <li>- Smart home electronics</li>
                                        <li>- Robotic vacuum cleaners</li>
                                        <li>- Robotic mops</li>
                                    </ul>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Company_Section;
