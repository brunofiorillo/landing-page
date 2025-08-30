import React from 'react';
import Header from './components/Header';
import Benefits from './components/Benefits';
import Services from './components/Services';
import About from './components/About';
import CTA from './components/CTA';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Benefits />
      <Services />
      <About />
      <CTA />
    </div>
  );
}

export default App;
