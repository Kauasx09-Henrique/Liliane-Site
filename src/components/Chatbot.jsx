import React, { useState, useEffect, useRef } from 'react';
import './styles/chatbot.css';

const Chatbot = () => {
    const messagesEndRef = useRef(null);
    const chatBodyRef = useRef(null);

    const [isChatOpen, setIsChatOpen] = useState(false);
    const [chatInput, setChatInput] = useState('');
    const [showOptions, setShowOptions] = useState(true);
    const [awaitingWhatsAppResponse, setAwaitingWhatsAppResponse] = useState(false);

    const [messages, setMessages] = useState([
        { sender: 'bot', text: 'Olá! Sou a assistente virtual da Liliane. 🤖 Como posso te ajudar hoje?' }
    ]);

    const chatOptions = [
        {
            label: 'Planejamento Previdenciário',
            botReply: 'Excelente escolha! O planejamento garante que você se aposente no momento certo e com o melhor valor. Posso te enviar o link do WhatsApp para agendarmos sua consulta?'
        },
        {
            label: 'Análise de Extrato CNIS',
            botReply: 'Entendi. Revisar o CNIS evita dores de cabeça e surpresas ruins com o INSS. Quer falar com a Liliane no WhatsApp para ela analisar o seu caso?'
        },
        {
            label: 'Pedir Aposentadoria',
            botReply: 'Que momento importante! Nós cuidamos de toda a burocracia para você não se estressar. Deseja o link do WhatsApp para darmos andamento?'
        },
        {
            label: 'Outro Assunto',
            botReply: 'Certo! Para entender melhor a sua situação e tirar todas as dúvidas, o ideal é conversarmos pelo WhatsApp. Deseja o link direto?'
        }
    ];

    useEffect(() => {
        if (isChatOpen && chatBodyRef.current) {
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
        }
    }, [messages, isChatOpen, showOptions]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        const userInput = chatInput.trim();
        if (!userInput) return;

        setMessages(prev => [...prev, { sender: 'user', text: userInput }]);
        setChatInput('');
        setShowOptions(false);

        const inputLower = userInput.toLowerCase();
        const isAffirmative = inputLower.includes('sim') || inputLower.includes('quero') || inputLower.includes('pode') || inputLower.includes('claro');
        const isNegative = inputLower.includes('não') || inputLower.includes('nao') || inputLower.includes('obrigado');

        setTimeout(() => {
            if (awaitingWhatsAppResponse) {
                if (isAffirmative) {
                    setMessages(prev => [...prev, {
                        sender: 'bot',
                        text: 'Ótimo! É só clicar no botão abaixo para iniciar o atendimento:',
                        link: 'https://wa.me/556184505988?text=Olá,%20Liliane!%20Vim%20pelo%20site%20e%20gostaria%20de%20ajuda.',
                        linkText: 'Falar no WhatsApp ↗'
                    }]);
                } else if (isNegative) {
                    setMessages(prev => [...prev, {
                        sender: 'bot',
                        text: 'Sem problemas! Se mudar de ideia, o botão do WhatsApp e o formulário de contato estão disponíveis na página. 😊'
                    }]);
                } else {
                    setMessages(prev => [...prev, {
                        sender: 'bot',
                        text: 'Vou deixar o link aqui caso decida falar diretamente conosco no WhatsApp:',
                        link: 'https://wa.me/556184505988',
                        linkText: 'Acessar WhatsApp ↗'
                    }]);
                }
                setAwaitingWhatsAppResponse(false);
            } else {
                setMessages(prev => [...prev, {
                    sender: 'bot',
                    text: 'Recebi sua mensagem. Para um atendimento imediato e personalizado, sugiro que me chame no WhatsApp. Deseja o link?'
                }]);
                setAwaitingWhatsAppResponse(true);
            }
        }, 1000);
    };

    const handleOptionClick = (option) => {
        setMessages(prev => [...prev, { sender: 'user', text: option.label }]);
        setShowOptions(false);

        setTimeout(() => {
            setMessages(prev => [...prev, {
                sender: 'bot',
                text: option.botReply
            }]);
            setAwaitingWhatsAppResponse(true);
        }, 1000);
    };

    return (
        <div className="chatbot-global-wrapper">
            <div className={`chat-window ${isChatOpen ? 'open' : ''}`}>
                <div className="chat-header">
                    <div className="chat-header-info">
                        <div className="chat-avatar">🤖</div>
                        <div>
                            <h4>Assistente Virtual</h4>
                            <span>Online agora</span>
                        </div>
                    </div>
                    <button className="chat-close" onClick={() => setIsChatOpen(false)}>✕</button>
                </div>

                <div className="chat-body" ref={chatBodyRef}>
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`chat-bubble ${msg.sender}`}>
                            <p>{msg.text}</p>
                            {msg.link && (
                                <a href={msg.link} target="_blank" rel="noreferrer" className="chat-btn-link">
                                    {msg.linkText}
                                </a>
                            )}
                        </div>
                    ))}

                    {showOptions && (
                        <div className="chat-options">
                            {chatOptions.map((opt, idx) => (
                                <button
                                    key={idx}
                                    className="chat-option-btn"
                                    onClick={() => handleOptionClick(opt)}
                                >
                                    {opt.label}
                                </button>
                            ))}
                        </div>
                    )}
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
    );
};

export default Chatbot;