import React from 'react';
import './App.css';

import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Faq from './pages/Faq';
import Footer from './components/Footer';
import Reveal from './components/Reveal';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Testemunhos from './pages/Testimanials';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="app-container">
      <Header />

      <main>
        <Reveal animation="blur-in" delay={0}>
          <Home />
        </Reveal>
        <Reveal animation="fade-up" delay={100}>
          <Services />
        </Reveal>
        <Reveal animation="fade-up" delay={100}>
          <About />
        </Reveal>
        <Reveal animation="fade-up" delay={100}>
          <Faq />
        </Reveal>
        <Reveal animation="fade-up" delay={100}>
          <Testemunhos />
        </Reveal>
        <Reveal animation="fade-up" delay={100}>
          <Contact />
        </Reveal>
      </main>

      <Reveal animation="fade-up" delay={0}>
        <Footer />
      </Reveal>

      <Chatbot />
    </div>
  );
}

export default App;