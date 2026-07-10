import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Resume from './components/Resume/Resume';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Sci-Fi Global Overlays */}
      <div className="scanlines"></div>
      <div className="cyber-bg"></div>

      {/* Navigation Header */}
      <Header />

      {/* Main Core Layout */}
      <main className="main-content">
        <Hero />
        <Skills />
        <Resume />
        <Projects />
        <Contact />
      </main>

      {/* Footer Branding Info */}
      <Footer />
    </div>
  );
}

export default App;
