import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Briefcase, HelpCircle, MessageCircle } from 'lucide-react';
import './styles/header.css';
import logoImg from '../../public/logo/logo.lc.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  // Monitora o scroll para o header desktop
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menu do Liquid Dock (Mobile)
  const dockItems = [
    { id: 'home', icon: Home, label: 'Início', href: '#home' },
    { id: 'sobre', icon: User, label: 'Sobre', href: '#sobre' },
    { id: 'servicos', icon: Briefcase, label: 'Serviços', href: '#servicos' },
    { id: 'faq', icon: HelpCircle, label: 'FAQ', href: '#faq' },
    { id: 'contato', icon: MessageCircle, label: 'Contato', href: '#contato' },
  ];

  return (
    <>
      {/* ====================================================
                HEADER DESKTOP (Fixado no topo, some no mobile)
                ==================================================== */}
      <header className={`header-desktop ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-d-container">
          <a href="#home" className="header-logo">
            <img src={logoImg} alt="Liliane Castro" />
          </a>

          <nav className="header-d-nav">
            <a href="#home" className={activeTab === 'home' ? 'active' : ''} onClick={() => setActiveTab('home')}>Início</a>
            <a href="#sobre" className={activeTab === 'sobre' ? 'active' : ''} onClick={() => setActiveTab('sobre')}>Sobre</a>
            <a href="#servicos" className={activeTab === 'servicos' ? 'active' : ''} onClick={() => setActiveTab('servicos')}>Serviços</a>
            <a href="#faq" className={activeTab === 'faq' ? 'active' : ''} onClick={() => setActiveTab('faq')}>Dúvidas</a>
            <a href="#depoimentos">Casos de Sucesso</a>
          </nav>

          <div className="header-actions">
            <a href="#contato" className="btn-header-gold">Fale Comigo</a>
          </div>
        </div>
      </header>

      {/* ====================================================
                LIQUID DOCK MOBILE (Fixado em baixo, só no celular)
                ==================================================== */}
      <div className="liquid-dock-wrapper">
        <nav className="liquid-dock">
          <div className="liquid-blur-bg"></div>

          {dockItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <a
                key={item.id}
                href={item.href}
                className={`dock-item ${isActive ? 'active' : ''}`}
                onClick={() => setActiveTab(item.id)}
              >
                {/* Bolha flutuante animada pelo Framer Motion */}
                {isActive && (
                  <motion.div
                    layoutId="liquid-bubble"
                    className="active-bubble"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 25
                    }}
                  />
                )}

                <span className="dock-icon-wrapper">
                  <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                </span>

                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      className="dock-label"
                      initial={{ opacity: 0, y: 10, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </a>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Header;