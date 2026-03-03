import React from 'react';
import './styles/Home.css';

const Home = () => {
  return (
    <div className="home-wrapper">
      <section className="hero-modern">
        <div className="hero-content-left">
          <span className="hero-badge">Consultoria Especializada</span>
          <h1 className="hero-heading">
            O seu futuro <em>seguro</em> e <em>planejado</em>
          </h1>
          <p className="hero-description">
            Especialista em benefícios do INSS e organização previdenciária. 
            Descomplicamos o processo para que você tenha a clareza necessária 
            no momento da sua aposentadoria.
          </p>
          <div className="hero-actions">
            <button className="btn-solid">Agendar Consultoria</button>
            <button className="btn-outline">Conhecer Serviços</button>
          </div>
        </div>
        <div className="hero-image-right">
          <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1000&auto=format&fit=crop" alt="Consultoria Previdenciária" />
        </div>
      </section>

      <section className="services-elegant">
        <div className="services-header">
          <h2>Soluções sob medida para o seu momento</h2>
          <div className="divider"></div>
        </div>
        
        <div className="services-list">
          <div className="service-item">
            <div className="service-number">01</div>
            <div className="service-text">
              <h3>Planejamento Previdenciário</h3>
              <p>Análise completa do seu tempo de contribuição para encontrar o momento exato e o melhor valor para o seu benefício.</p>
            </div>
            <button className="service-arrow">→</button>
          </div>

          <div className="service-item">
            <div className="service-number">02</div>
            <div className="service-text">
              <h3>Análise de Extrato CNIS</h3>
              <p>Revisão minuciosa de todo o seu histórico para evitar pendências, surpresas ou cálculos incorretos no sistema.</p>
            </div>
            <button className="service-arrow">→</button>
          </div>

          <div className="service-item">
            <div className="service-number">03</div>
            <div className="service-text">
              <h3>Encaminhamento de Aposentadoria</h3>
              <p>Organização documental e acompanhamento de ponta a ponta do seu pedido diretamente nos canais oficiais.</p>
            </div>
            <button className="service-arrow">→</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;