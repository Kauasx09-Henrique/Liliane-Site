import React from 'react';
import './styles/services.css';

const Services = () => {
    return (
        <section className="services-ultra-section" id="servicos">
            <div className="su-grid-lines">
                <span></span><span></span><span></span><span></span>
            </div>

            <div className="su-watermark">SOLUÇÕES</div>

            <div className="su-container">
                <div className="su-header">
                    <div className="su-eyebrow">
                        <div className="su-pulse"></div>
                        <span>Metodologia Exclusiva</span>
                    </div>
                    <h2 className="su-title">
                        <div className="su-overflow">
                            <span className="su-line">A estratégia certa</span>
                        </div>
                        <div className="su-overflow indent">
                            <span className="su-line delay-1">para o seu <em>momento</em>.</span>
                        </div>
                    </h2>
                </div>

                <div className="su-list">
                    <div className="su-row">
                        <div className="su-row-border"></div>
                        <div className="su-number">01</div>
                        <div className="su-content">
                            <h3>Planejamento Previdenciário</h3>
                            <p>Análise completa do seu tempo de contribuição para encontrar o momento exato e garantir o melhor valor possível para o seu benefício no futuro.</p>
                        </div>
                        <div className="su-action">
                            <div className="su-arrow-circle">
                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="su-row">
                        <div className="su-row-border"></div>
                        <div className="su-number">02</div>
                        <div className="su-content">
                            <h3>Análise de Extrato CNIS</h3>
                            <p>Revisão cirúrgica de todo o seu histórico trabalhista para evitar pendências, surpresas desagradáveis ou cálculos incorretos no sistema do INSS.</p>
                        </div>
                        <div className="su-action">
                            <div className="su-arrow-circle">
                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="su-row">
                        <div className="su-row-border"></div>
                        <div className="su-number">03</div>
                        <div className="su-content">
                            <h3>Encaminhamento de Benefício</h3>
                            <p>Organização documental impecável e acompanhamento de ponta a ponta do seu pedido de aposentadoria diretamente nos canais oficiais.</p>
                        </div>
                        <div className="su-action">
                            <div className="su-arrow-circle">
                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;