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

import NewPage2 from './sections/analysis_page/page2'; 

import NewPage3 from './sections/stories_page/page3'; 

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
        <Route path="/page1" element={<Financial />} />
        <Route path="/page2" element={<Analysis />} />
        <Route path="/page3" element={<Stories />} />
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
