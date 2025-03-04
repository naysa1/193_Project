// import React from 'react'
// import Navbar from './sections/navbar'

// const App = () => {
//   return (
//     <main className="max-w-7xl mx-auto">
//       <Navbar/>
//     </main>
//   )
// }

// export default App

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './sections/navbar';

import HeroSection from './sections/home_page/HeroSection';
import AboutSection from './sections/home_page/AboutSection';
import ContentSection from './sections/home_page/ContentSection';

import AnnualRev_Section from './sections/financial_page/AnnualRev_Section';
import ProfitMargin_Section from './sections/financial_page/ProfitMargin_Section';
import ESG_Section from './sections/financial_page/ESG_Section';

import Industry_Section from './sections/analysis_page/Industry_Section';
import Company_Section from './sections/analysis_page/Company_Section';

const Home = () => (
  <main className="max-w-7xl mx-auto">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ContentSection />
  </main>
);

const Financial = () => (
  <main className="max-w-7xl mx-auto">
    <AnnualRev_Section />
    <ProfitMargin_Section />
    <ESG_Section />
  </main>
);

const Analysis = () => (
  <main className="max-w-7xl mx-auto">
    <Industry_Section />
    <Company_Section />
  </main>
);

const Stories = () => (
  <main className="max-w-7xl mx-auto">

  </main>
);

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Keep navbar on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Financial" element={<Financial />} />
        <Route path="/Analysis" element={<Analysis />} />
        <Route path="/Stories" element={<Stories />} />
      </Routes>
    </Router>
  );
};
// const App = () => {
//   return (
//     <main className="max-w-7xl mx-auto">
//       <Navbar />
//       <HeroSection />
//       <AboutSection />
//       <ContentSection />
//     </main>
//   );
// }

export default App;
