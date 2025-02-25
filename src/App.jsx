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
import Navbar from './sections/navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ContentSection from './sections/ContentSection';

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ContentSection />
    </main>
  );
}

export default App;
