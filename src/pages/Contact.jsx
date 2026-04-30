import React, { useState, useEffect, useRef } from 'react';
import './styles/contact.css';

const Contact = () => {
    const sectionRef = useRef(null);
    const messagesEndRef = useRef(null);

    const [isChatOpen, setIsChatOpen] = useState(false);
    const [chatInput, setChatInput] = useState('');
    const [messages, setMessages] = useState([
        { sender: 'bot', text: 'Olá! Sou a assistente virtual da Liliane. Como posso te ajudar hoje?' }
    ]);

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

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isChatOpen]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!chatInput.trim()) return;

        setMessages(prev => [...prev, { sender: 'user', text: chatInput }]);
        setChatInput('');

        setTimeout(() => {
            setMessages(prev => [...prev, {
                sender: 'bot',
                text: 'Recebi sua mensagem. Para um atendimento imediato e personalizado, sugiro que me chame no WhatsApp ou preencha o formulário da página. Deseja o link do WhatsApp?'
            }]);
        }, 1000);
    };

    return (
        <>
            <section className="contact-light" id="contato" ref={sectionRef}>
                <div className="contact-light-glow"></div>

                <div className="contact-container">
                    <header className="contact-header">
                        <div className="contact-badge">
                            <span className="badge-dot"></span>
                            <span>Fale Comigo</span>
                        </div>
                        <h2 className="contact-title">
                            Dê o primeiro passo para a sua <em>tranquilidade</em>.
                        </h2>
                        <p className="contact-subtitle">
                            Agende sua consultoria ou tire suas dúvidas. Estou pronta para analisar o seu caso e planejar o seu futuro com excelência.
                        </p>
                    </header>

                    <div className="contact-grid">
                        <div className="contact-info-wrapper">
                            <div className="info-cards-light">
                                <div className="info-card">
                                    <div className="info-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                    </div>
                                    <div className="info-text">
                                        <h3>WhatsApp / Telefone</h3>
                                        <p>+55 61 8450-5988</p>
                                        <a href="https://wa.me/556184505988?text=Olá,%20Liliane!%20Gostaria%20de%20saber%20mais%20sobre%20a%20consultoria%20previdenciária." target="_blank" rel="noreferrer" className="info-link">
                                            Iniciar Conversa <span>↗</span>
                                        </a>
                                    </div>
                                </div>

                                <div className="info-card">
                                    <div className="info-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                    </div>
                                    <div className="info-text">
                                        <h3>E-mail Direto</h3>
                                        <p>contato@lilianecastro.com.br</p>
                                    </div>
                                </div>

                                <div className="info-card">
                                    <div className="info-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                    </div>
                                    <div className="info-text">
                                        <h3>Atendimento</h3>
                                        <p>Presencial e digital para todo o Brasil.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="map-light-wrapper">
                                <iframe
                                    src="https://maps.google.com/maps?q=-15.79051374496811,-48.13623872619688&hl=pt-BR&z=15&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Localização do Escritório"
                                ></iframe>
                                <div className="map-overlay"></div>
                            </div>
                        </div>

                        <div className="contact-form-wrapper">
                            <form className="light-form">
                                <h3 className="form-title">Envie sua mensagem</h3>

                                <div className="form-group">
                                    <input type="text" id="nome" placeholder=" " required />
                                    <label htmlFor="nome">Nome Completo</label>
                                    <div className="input-focus-line"></div>
                                </div>

                                <div className="form-group">
                                    <input type="tel" id="telefone" placeholder=" " required />
                                    <label htmlFor="telefone">WhatsApp</label>
                                    <div className="input-focus-line"></div>
                                </div>

                                <div className="form-group">
                                    <textarea id="mensagem" rows="4" placeholder=" " required></textarea>
                                    <label htmlFor="mensagem">Como posso te ajudar?</label>
                                    <div className="input-focus-line"></div>
                                </div>

                                <button type="submit" className="btn-light-submit">
                                    <span>Solicitar Análise</span>
                                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <div className="chatbot-wrapper">
                <div className={`chat-window ${isChatOpen ? 'open' : ''}`}>
                    <div className="chat-header">
                        <div className="chat-header-info">
                            <div className="chat-avatar">LC</div>
                            <div>
                                <h4>Assistente Virtual</h4>
                                <span>Online agora</span>
                            </div>
                        </div>
                        <button className="chat-close" onClick={() => setIsChatOpen(false)}>✕</button>
                    </div>

                    <div className="chat-body">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`chat-bubble ${msg.sender}`}>
                                {msg.text}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    <form className="chat-input-area" onSubmit={handleSendMessage}>
                        <input
                            type="text"
                            value={chatInput}
                            onChange={(e) => setChatInput(e.target.value)}
                            placeholder="Digite sua mensagem..."
                        />
                        <button type="submit">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                        </button>
                    </form>
                </div>

                <button
                    className={`chat-fab ${isChatOpen ? 'hidden' : ''}`}
                    onClick={() => setIsChatOpen(true)}
                >
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                </button>
            </div>
        </>
    );
};

export default Contact;