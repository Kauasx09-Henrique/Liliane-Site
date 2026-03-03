import React, { useState, useEffect } from 'react';
import '../pages/styles/Header.css';
import logoImg from '../../public/logo/logo.lc.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`header-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <a href="#home" className="header-logo" onClick={closeMenu}>
          <img src={logoImg} alt="Liliane Castro Consultoria" className="logo-img" />
        </a>

        <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <nav className={`header-nav ${menuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={closeMenu}>Início</a>
          <a href="#sobre" onClick={closeMenu}>Sobre Mim</a>
          <a href="#servicos" onClick={closeMenu}>Serviços</a>
          <a href="#contato" onClick={closeMenu}>Contato</a>
          <a href="#contato" className="header-btn-mobile" onClick={closeMenu}>Fale Comigo</a>
        </nav>
        
        <a href="#contato" className="header-btn">Fale Comigo</a>
      </div>
    </header>
  );
};

export default Header;