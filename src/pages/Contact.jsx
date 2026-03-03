import React from 'react';
import './styles/contact.css';

const Contact = () => {
    return (
        <section className="contact-premium" id="contato">
            <div className="contact-container">
                <div className="contact-header">
                    <span className="badge-premium">
                        <span className="badge-line"></span>
                        Fale Comigo
                    </span>
                    <h2 className="heading-premium">
                        Dê o primeiro passo para a sua <em>tranquilidade</em>
                    </h2>
                    <p className="contact-subtitle">
                        Agende sua consultoria ou tire suas dúvidas. Estou pronta para analisar o seu caso e planejar o seu futuro.
                    </p>
                </div>

                <div className="contact-grid">
                    <div className="contact-info-side">
                        <div className="info-cards">
                            <div className="info-item">
                                <h3>WhatsApp / Telefone</h3>
                                <p>+55 61 8450-5988</p>
                                <a href="https://wa.me/556184505988?text=Olá,%20Liliane!%20Gostaria%20de%20saber%20mais%20sobre%20a%20consultoria%20previdenciária." target="_blank" rel="noreferrer" className="btn-whatsapp">
                                    Enviar Mensagem
                                </a>
                            </div>
                            <div className="info-item">
                                <h3>E-mail</h3>
                                <p>contato@lilianecastro.com.br</p>
                            </div>
                            <div className="info-item">
                                <h3>Localização</h3>
                                <p>Atendimento presencial e online para todo o Brasil.</p>
                            </div>
                        </div>

                        <div className="map-wrapper">
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
                        </div>
                    </div>

                    <div className="contact-form-side">
                        <form className="premium-form">
                            <h3>Envie uma mensagem direta</h3>
                            
                            <div className="form-group">
                                <label htmlFor="nome">Nome Completo</label>
                                <input type="text" id="nome" placeholder="Como prefere ser chamado?" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="telefone">WhatsApp</label>
                                <input type="tel" id="telefone" placeholder="(61) 00000-0000" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="mensagem">Como posso te ajudar?</label>
                                <textarea id="mensagem" rows="5" placeholder="Conte um pouco sobre a sua situação..." required></textarea>
                            </div>

                            <button type="submit" className="btn-submit">Solicitar Análise</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;