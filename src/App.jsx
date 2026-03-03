import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
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
        <Contact/>
      </main>
      <Footer />
    </div>
  );
}

export default App;