import React from 'react';
import './styles/About.css';
// Importe a imagem de perfil (ajuste o caminho se necessário)
import profileImg from '../../public/Foto_Liliane.png';

const About = () => {
  return (
    <section className="about-wrapper" id="sobre">
      <div className="about-content">
        <div className="about-text-side">
          <span className="about-badge">Conheça Liliane Castro</span>
          <h2 className="about-heading">
            Sua parceira para um futuro <em>organizado</em> e <em>tranquilo</em>
          </h2>
          <p className="about-description">
            Minha missão é descomplicar o universo do INSS para você. Com anos de dedicação exclusiva e estudo aprofundado das normas previdenciárias, eu não apenas organizo documentos; eu crio clareza e segurança para o seu planejamento previdenciário e a conquista dos seus benefícios.
          </p>
          <div className="about-story-cards">
            <div className="story-card">
              <span className="card-number">01</span>
              <h3>Experiência Focada</h3>
              <p>Especialização contínua nas regras e cálculos do INSS para encontrar o melhor caminho para sua aposentadoria.</p>
            </div>
            <div className="story-card">
              <span className="card-number">02</span>
              <h3>Abordagem Humanizada</h3>
              <p>Sua trajetória é única. Escuto sua história, analiso seu CNIS e planejo seu futuro com empatia e transparência.</p>
            </div>
            <div className="story-card">
              <span className="card-number">03</span>
              <h3>Segurança Documental</h3>
              <p>Organização minuciosa e encaminhamento de pedidos para evitar pendências e garantir seus benefícios sem estresse.</p>
            </div>
          </div>
        </div>

        <div className="about-image-side">
          <div className="image-container">
            <img src={profileImg} alt="Liliane Castro" className="profile-image" />
          </div>
          <div className="image-accent-border"></div>
        </div>
      </div>
    </section>
  );
};

export default About;