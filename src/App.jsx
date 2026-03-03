import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <main>
        <Home />
        <About />
      </main>
    </div>
  );
}

export default App;