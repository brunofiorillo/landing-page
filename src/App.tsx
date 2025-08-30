import React from 'react';
import Header from './components/Header';
import Benefits from './components/Benefits';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Benefits />
      <Services />
      <About />
      <Testimonials />
      <CTA />
    </div>
  );
}

export default App;
