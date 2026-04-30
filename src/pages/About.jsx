import React from 'react';
import './styles/about.css';
import profileImg from '../../public/Foto_Liliane.png';

const About = () => {
    return (
        <section className="about-kinetic" id="sobre">
            <div className="kinetic-orbs">
                <div className="orb orb-1"></div>
                <div className="orb orb-2"></div>
            </div>

            <div className="kinetic-marquee">
                <div className="marquee-track">
                    <span>DIREITO PREVIDENCIÁRIO • PLANEJAMENTO DE APOSENTADORIA • ESPECIALISTA INSS • </span>
                    <span>DIREITO PREVIDENCIÁRIO • PLANEJAMENTO DE APOSENTADORIA • ESPECIALISTA INSS • </span>
                </div>
            </div>

            <div className="kinetic-container">
                <div className="kinetic-visual">
                    <div className="visual-3d-scene">
                        <div className="kinetic-spin-ring"></div>
                        <div className="kinetic-spin-ring reverse"></div>

                        <div className="image-kinetic-wrapper">
                            <img src={profileImg} alt="Liliane Castro" className="kinetic-img" />
                        </div>

                        <div className="glass-floating-badge float-anim-1">
                            <div className="glass-glow"></div>
                            <span className="glass-number">+5</span>
                            <span className="glass-text">Anos de<br />Autoridade</span>
                        </div>

                        <div className="glass-floating-badge small float-anim-2">
                            <span className="glass-icon">✦</span>
                            <span className="glass-text">Atendimento<br />Humanizado</span>
                        </div>
                    </div>
                </div>

                <div className="kinetic-content">
                    <div className="kinetic-badge reveal-fade">
                        <span className="badge-pulse"></span>
                        Trajetória Profissional
                    </div>

                    <h2 className="kinetic-title">
                        <div className="title-row">
                            <span className="word slide-up delay-1">Transformando</span>
                            <span className="word slide-up delay-2">a</span>
                        </div>
                        <div className="title-row">
                            <span className="word slide-up delay-3 highlight">burocracia</span>
                            <span className="word slide-up delay-4">em</span>
                        </div>
                        <div className="title-row">
                            <span className="word slide-up delay-5">tranquilidade.</span>
                        </div>
                    </h2>

                    <div className="kinetic-text-wrapper reveal-fade delay-6">
                        <p className="kinetic-desc">
                            Minha missão é descomplicar o universo do INSS para você. Com dedicação exclusiva e estudo aprofundado das normas previdenciárias, eu crio rotas seguras e estratégicas.
                        </p>
                        <p className="kinetic-desc">
                            Cada história importa. O meu objetivo é garantir que você conquiste seus direitos sem estresse, recebendo o benefício justo no momento exato da sua vida.
                        </p>
                    </div>

                    <div className="kinetic-pills">
                        <div className="k-pill pop-in delay-7">
                            <div className="k-pill-bg"></div>
                            <span className="k-dot"></span> Estratégia
                        </div>
                        <div className="k-pill pop-in delay-8">
                            <div className="k-pill-bg"></div>
                            <span className="k-dot"></span> Transparência
                        </div>
                        <div className="k-pill pop-in delay-9">
                            <div className="k-pill-bg"></div>
                            <span className="k-dot"></span> Resultados
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;