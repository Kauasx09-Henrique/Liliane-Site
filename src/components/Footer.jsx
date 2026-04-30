import React from 'react';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import './styles/footer.css';
import logoImg from '../../public/logo/logo.lc.png';

const Footer = () => {
  return (
    <footer className="footer-elite" id="contato">
      <div className="footer-elite-glow"></div>

      <div className="footer-elite-container">
        <div className="footer-elite-top">

          <div className="footer-brand-col">
            <a href="#home" className="footer-logo-elite">
              <img src={logoImg} alt="Liliane Castro" />
            </a>
            <p className="footer-desc-elite">
              Especialista em benefícios do INSS. Transformando a complexidade das regras em um planejamento seguro para o seu futuro.
            </p>

            <div className="footer-social-elite">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-pill">
                <FaInstagram size={18} />
                <span>Instagram</span>
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-pill">
                <FaLinkedin size={18} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="footer-nav-col">
            <h4 className="footer-heading-elite">Navegação</h4>
            <nav className="footer-links-elite">
              <a href="#home">
                <ArrowRight size={14} className="link-arrow" />
                Início
              </a>
              <a href="#sobre">
                <ArrowRight size={14} className="link-arrow" />
                Sobre a Especialista
              </a>
              <a href="#servicos">
                <ArrowRight size={14} className="link-arrow" />
                Nossas Soluções
              </a>
              <a href="#faq">
                <ArrowRight size={14} className="link-arrow" />
                Dúvidas Frequentes
              </a>
            </nav>
          </div>

          <div className="footer-contact-col">
            <h4 className="footer-heading-elite">Contato Direto</h4>
            <div className="footer-contact-list">

              <div className="contact-item-elite">
                <Phone size={18} className="contact-icon-elite" />
                <div>
                  <span>WhatsApp / Celular</span>
                  <p>+55 61 8450-5988</p>
                </div>
              </div>

              <div className="contact-item-elite">
                <Mail size={18} className="contact-icon-elite" />
                <div>
                  <span>E-mail</span>
                  <p>contato@lilianecastro.com.br</p>
                </div>
              </div>

              <div className="contact-item-elite">
                <MapPin size={18} className="contact-icon-elite" />
                <div>
                  <span>Localização</span>
                  <p>Atendimento online p/ todo o Brasil</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        <div className="footer-elite-bottom">
          <p className="copyright-text">
            &copy; 2026 Liliane Castro Consultoria Previdenciária. Todos os direitos reservados.
          </p>
          <a href="#home" className="back-to-top">
            Voltar ao topo ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;