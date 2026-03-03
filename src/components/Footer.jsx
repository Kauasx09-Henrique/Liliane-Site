import React from 'react';
import '../pages/styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-wrapper" id="contato">
      <div className="footer-content">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            Liliane<span>Castro</span>
          </a>
          <p className="footer-description">
            Especialista em benefícios do INSS e organização previdenciária. Transformando a complexidade das regras em um planejamento seguro para o seu futuro.
          </p>
        </div>
        
        <div className="footer-links">
          <h3>Navegação Rápida</h3>
          <a href="#home">Início</a>
          <a href="#sobre">Sobre a Especialista</a>
          <a href="#servicos">Nossas Soluções</a>
        </div>

        <div className="footer-contact">
          <h3>Fale Comigo</h3>
          <p>WhatsApp: (00) 00000-0000</p>
          <p>Email: contato@lilianecastro.com.br</p>
          <p>Atendimento Online para todo o Brasil</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2026 Liliane Castro Consultoria Previdenciária. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;