import React, { useEffect, useRef } from 'react';
import './styles/testimonials.css';

const Testimonials = () => {
    const sectionRef = useRef(null);

    const reviews = [
        {
            id: 1,
            text: "Eu estava completamente perdido com as novas regras do INSS. A Liliane organizou todo o meu tempo de contribuição e descobriu que eu já podia me aposentar com um valor muito melhor do que eu imaginava.",
            author: "Carlos Eduardo",
            role: "Aposentadoria Planejada",
            initials: "CE"
        },
        {
            id: 2,
            text: "Profissionalismo impecável! O atendimento humanizado fez toda a diferença. Ela pegou meu extrato CNIS, que estava cheio de pendências de empresas antigas, e resolveu tudo antes de darmos entrada.",
            author: "Maria Helena",
            role: "Revisão de Extrato CNIS",
            initials: "MH"
        },
        {
            id: 3,
            text: "Minha melhor decisão foi contratar a consultoria antes de pedir a aposentadoria. O processo foi transparente, seguro e eu não tive dor de cabeça com a burocracia do governo.",
            author: "Roberto Alves",
            role: "Encaminhamento de Benefício",
            initials: "RA"
        }
    ];

    // Efeito Magnético / Spotlight nos Cards
    useEffect(() => {
        const cards = document.querySelectorAll('.testim-card');

        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="testim-section" id="depoimentos" ref={sectionRef}>

            {/* Elemento orgânico animado no fundo (Aura Verde) */}
            <div className="testim-background-aura">
                <div className="aura-blob aura-1"></div>
                <div className="aura-blob aura-2"></div>
            </div>

            <div className="testim-container">
                <header className="testim-header">
                    <div className="testim-eyebrow">
                        <span className="eyebrow-line"></span>
                        <span className="eyebrow-text">Casos Reais</span>
                    </div>
                    <h2 className="testim-title">
                        A tranquilidade de quem já<br /> <em>planejou o amanhã</em>.
                    </h2>
                </header>

                <div className="testim-grid">
                    {reviews.map((review, index) => (
                        <article
                            className="testim-card"
                            key={review.id}
                            style={{ '--card-index': index }}
                        >
                            {/* Camada do Spotlight magnético */}
                            <div className="testim-card-spotlight"></div>

                            <div className="testim-card-inner">
                                <div className="testim-card-top">
                                    <div className="testim-stars">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i}>★</span>
                                        ))}
                                    </div>
                                    <div className="testim-quote-mark">“</div>
                                </div>

                                <blockquote className="testim-text">
                                    <p>"{review.text}"</p>
                                </blockquote>

                                <footer className="testim-author">
                                    <div className="testim-avatar-wrapper">
                                        <div className="testim-avatar-glow"></div>
                                        <div className="testim-avatar">{review.initials}</div>
                                    </div>
                                    <div className="testim-author-meta">
                                        <cite className="testim-author-name">{review.author}</cite>
                                        <span className="testim-author-role">{review.role}</span>
                                    </div>
                                </footer>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;