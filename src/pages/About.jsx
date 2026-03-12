import React from 'react';
import './styles/about.css';
import profileImg from '../../public/Foto_Liliane.png';

const About = () => {
    return (
        <section className="about-luxury-light" id="sobre">
            <div className="about-glow-bg"></div>

            <div className="about-container">
                <div className="about-text-content">
                    <div className="badge-premium">
                        <span className="badge-line"></span>
                        Sobre a Especialista
                    </div>

                    <h2 className="heading-premium">
                        Sua parceira para um futuro <em>organizado</em> e <em>seguro</em>.
                    </h2>

                    <blockquote className="quote-premium">
                        "Minha missão é descomplicar o universo do INSS para você, transformando a burocracia em tranquilidade e resultados."
                    </blockquote>

                    <p className="description-premium">
                        Com dedicação exclusiva e estudo aprofundado das normas previdenciárias, eu não apenas organizo documentos; eu crio clareza. Meu objetivo é garantir que você conquiste seus direitos sem estresse, através de um planejamento sólido, empático e totalmente estratégico.
                    </p>

                    <div className="features-list">
                        <div className="feature-item">
                            <span className="feature-number">01</span>
                            <div className="feature-details">
                                <h3>Experiência Focada</h3>
                                <p>Especialização contínua nas regras e cálculos do INSS para encontrar o melhor caminho.</p>
                            </div>
                        </div>

                        <div className="feature-item">
                            <span className="feature-number">02</span>
                            <div className="feature-details">
                                <h3>Abordagem Humanizada</h3>
                                <p>Sua trajetória é única. Escuto sua história e planejo seu futuro com total empatia.</p>
                            </div>
                        </div>

                        <div className="feature-item">
                            <span className="feature-number">03</span>
                            <div className="feature-details">
                                <h3>Segurança Documental</h3>
                                <p>Organização minuciosa para evitar qualquer tipo de pendência no seu pedido.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-visuals">
                    <div className="image-wrapper-premium">
                        <img src={profileImg} alt="Liliane Castro" className="img-premium" />
                        <div className="img-decoration"></div>

                        <div className="floating-badge">
                            <span className="floating-number">+5</span>
                            <span className="floating-text">Anos de<br />Experiência</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;