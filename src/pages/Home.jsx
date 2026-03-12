import React from 'react';
import './styles/Home.css';
import video from '../../public/videos/video_liliane.mp4';

const Home = () => {
    return (
        <div className="home-wrapper">
            <section className="hero-modern">
                <div className="hero-content-left">
                    <span className="hero-badge">Consultoria Especializada</span>
                    <h1 className="hero-heading">
                        O seu futuro <em>seguro</em> e <em>planejado</em>
                    </h1>
                    <p className="hero-description">
                        Especialista em benefícios do INSS e organização previdenciária.
                        Descomplicamos o processo para que você tenha a clareza necessária
                        no momento da sua aposentadoria.
                    </p>
                    <div className="hero-actions">
                        <button className="btn-solid">Agendar Consultoria</button>
                        <button className="btn-outline">Conhecer Serviços</button>
                    </div>
                </div>
                <div className="hero-image-right">
                    <video
                        src={video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="hero-video"
                    ></video>
                </div>
            </section>
        </div>
    );
};

export default Home;