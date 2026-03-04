import React from 'react';
import './styles/testimonials.css';

const Testimonials = () => {
    const reviews = [
        {
            id: 1,
            text: "Eu estava completamente perdido com as novas regras do INSS. A Liliane organizou todo o meu tempo de contribuição e descobriu que eu já podia me aposentar com um valor muito melhor do que eu imaginava.",
            author: "Carlos Eduardo",
            role: "Aposentadoria Planejada"
        },
        {
            id: 2,
            text: "Profissionalismo impecável! O atendimento humanizado fez toda a diferença. Ela pegou meu extrato CNIS, que estava cheio de pendências de empresas antigas, e resolveu tudo antes de darmos entrada.",
            author: "Maria Helena",
            role: "Revisão de Extrato CNIS"
        },
        {
            id: 3,
            text: "Minha melhor decisão foi contratar a consultoria antes de pedir a aposentadoria. O processo foi transparente, seguro e eu não tive dor de cabeça com a burocracia do governo.",
            author: "Roberto Alves",
            role: "Encaminhamento de Benefício"
        }
    ];

    return (
        <section className="testimonials-premium" id="depoimentos">
            <div className="testimonials-container">
                <div className="testimonials-header">
                    <span className="badge-premium-light">
                        <span className="badge-line-light"></span>
                        Casos de Sucesso
                    </span>
                    <h2 className="heading-light">
                        A tranquilidade de quem já <em>planejou o futuro</em>
                    </h2>
                </div>

                <div className="testimonials-grid">
                    {reviews.map((review) => (
                        <div className="testimonial-card" key={review.id}>
                            <div className="quote-icon">“</div>
                            <p className="testimonial-text">{review.text}</p>
                            <div className="testimonial-author">
                                <h4>{review.author}</h4>
                                <span>{review.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;