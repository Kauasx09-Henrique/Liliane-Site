import React, { useState, useRef } from 'react';
import './styles/faq.css';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const containerRef = useRef(null);

    const questions = [
        {
            question: "Qual é o melhor momento para procurar um planejamento?",
            answer: "O ideal é buscar o planejamento pelo menos 5 anos antes da data provável da sua aposentadoria. No entanto, mesmo que você já tenha atingido a idade ou o tempo, uma análise antes de fazer o pedido ao INSS pode evitar perdas financeiras irreparáveis."
        },
        {
            question: "Vocês atendem pessoas de outros estados?",
            answer: "Sim! Todo o nosso processo de consultoria, análise e planejamento pode ser feito de forma 100% digital e segura, permitindo que eu atenda clientes de qualquer lugar do Brasil com a mesma proximidade e excelência."
        },
        {
            question: "O que é preciso para a primeira análise?",
            answer: "Para a nossa primeira conversa de diagnóstico, o documento principal é o seu extrato CNIS (Cadastro Nacional de Informações Sociais), que pode ser facilmente emitido pelo portal Meu INSS através da sua conta Gov.br."
        },
        {
            question: "A consultoria garante a aprovação do meu benefício?",
            answer: "A consultoria garante que o seu pedido será feito da maneira mais estratégica e correta possível, com toda a documentação alinhada às exigências da lei. O deferimento depende da análise final do INSS, mas nosso trabalho reduz drasticamente as chances de erros."
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        containerRef.current.style.setProperty('--mouse-x', `${x}px`);
        containerRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    return (
        <section className="faq-kinetic-section" id="faq" ref={containerRef} onMouseMove={handleMouseMove}>
            <div className="faq-kinetic-glow"></div>

            <div className="faq-kinetic-container">
                <div className="faq-k-header">
                    <div className="k-badge-wrapper">
                        <span className="k-badge-dot"></span>
                        <span className="k-badge-text">Clareza Absoluta</span>
                    </div>
                    <h2 className="faq-k-title">
                        Sua jornada, <em>explicada.</em>
                    </h2>
                </div>

                <div className="faq-k-grid">
                    {questions.map((item, index) => {
                        const isActive = activeIndex === index;
                        return (
                            <div
                                key={index}
                                className={`faq-k-card ${isActive ? 'is-active' : ''}`}
                                onClick={() => toggleAccordion(index)}
                            >
                                <div className="faq-k-card-spotlight"></div>

                                <div className="faq-k-card-content">
                                    <div className="faq-k-question-area">
                                        <div className="faq-k-number">{(index + 1).toString().padStart(2, '0')}</div>
                                        <h3 className="faq-k-question">{item.question}</h3>
                                        <div className="faq-k-toggle">
                                            <span className="k-line-h"></span>
                                            <span className="k-line-v"></span>
                                        </div>
                                    </div>

                                    <div className="faq-k-answer-area">
                                        <div className="faq-k-answer-inner">
                                            <p>{item.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Faq;