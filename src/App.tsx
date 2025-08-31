import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Benefits from './components/Benefits';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <section id="inicio">
          <Home />
        </section>
        <section id="vantagens">
          <Benefits />
        </section>
        <section id="servicos">
          <Services />
        </section>
        <section id="sobre">
          <About />
        </section>
        <section id="depoimentos">
          <Testimonials />
        </section>
        <section id="contato">
          <CTA />
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
