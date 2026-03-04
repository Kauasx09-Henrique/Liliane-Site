import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Testimonials from './pages/Testimanials';

// Header e Footer
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />


      <main>
        <Home />
        <About />
        <Faq />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;