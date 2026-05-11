import React from 'react';
import './styles/home.css';
import video from '../../public/videos/video_liliane.mp4';

const Home = () => {
    return (
        <div className="home-ultra">
            <div className="ultra-grid-lines">
                <span></span><span></span><span></span><span></span>
            </div>

            <div className="ultra-watermark">INSS</div>

            <div className="ultra-container">
                <div className="ultra-content">
                    <div className="ultra-eyebrow">
                        <div className="eyebrow-pulse"></div>
                        <span>Assessoria de Alto Padrão</span>
                    </div>

                    <h1 className="ultra-title">
                        <div className="title-overflow">
                            <span className="t-line delay-1">O seu futuro,</span>
                        </div>
                        <div className="title-overflow indent">
                            <span className="t-line delay-2"><em>desenhado</em> com</span>
                        </div>
                        <div className="title-overflow">
                            <span className="t-line delay-3">excelência.</span>
                        </div>
                    </h1>

                    <p className="ultra-subtitle">
                        Transformamos a complexidade do direito previdenciário em segurança e clareza. Um planejamento estratégico desenhado exclusivamente para o seu momento.
                    </p>

                    <div className="ultra-actions">
                        <button className="btn-ultra-primary">
                            <span className="btn-text">Iniciar Planejamento</span>
                            <span className="btn-icon">
                                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </span>
                        </button>
                        <a href="#sobre" className="ultra-link">
                            Conhecer o método
                        </a>
                    </div>
                </div>

                <div className="ultra-visual">
                    <div className="ultra-video-container">
                        <video src={video} autoPlay loop muted playsInline className="ultra-video"></video>
                        <div className="ultra-video-frame"></div>
                    </div>

                    <div className="ultra-badge">
                        <svg viewBox="0 0 100 100" width="140" height="140">
                            <defs>
                                <path id="badgePath" d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
                            </defs>
                            <text fontSize="10" letterSpacing="2" fill="var(--color-gold)">
                                <textPath href="#badgePath">
                                    • CONSULTORIA EXCLUSIVA • DIREITO PREVIDENCIÁRIO
                                </textPath>
                            </text>
                        </svg>
                        <div className="badge-center-dot"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;