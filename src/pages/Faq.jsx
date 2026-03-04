
import React, { useState } from 'react';
import './styles/faq.css';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const questions = [
        {
            question: "Qual é o melhor momento para procurar um planejamento previdenciário?",
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
            answer: "A consultoria garante que o seu pedido será feito da maneira mais estratégica e correta possível, com toda a documentação alinhada às exigências da lei. O deferimento (aprovação) depende da análise final do próprio INSS, mas nosso trabalho reduz drasticamente as chances de erros e negativas injustas."
        }
    ];

    const toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <section className="faq-premium" id="faq">
            <div className="faq-container">
                <div className="faq-title-side">
                    <span className="badge-premium">
                        <span className="badge-line"></span>
                        Dúvidas Comuns
                    </span>
                    <h2 className="heading-premium">
                        Perguntas <em>Frequentes</em>
                    </h2>
                    <p className="faq-description">
                        Transparência é a base do meu trabalho. Confira as respostas para as dúvidas mais comuns sobre planejamento e benefícios do INSS.
                    </p>
                </div>

                <div className="faq-accordion-side">
                    {questions.map((item, index) => (
                        <div
                            className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
                            key={index}
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className="accordion-header">
                                <h3>{item.question}</h3>
                                <span className="accordion-icon">{activeIndex === index ? '−' : '+'}</span>
                            </div>
                            <div className="accordion-body">
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;