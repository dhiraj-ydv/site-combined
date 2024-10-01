import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Contact from './components/Contact';
import Links from './components/Links'; // Add the Links component
import Footer from './components/Footer';
import TechSkills from './components/TechSkills';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <About />
        <Education />
        <TechSkills />
        <Links /> {/* Add the Links section */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
