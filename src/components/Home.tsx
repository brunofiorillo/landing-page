import React from 'react';
import './Home.css';
import professorImage from '../images/eduardoBorges.png';

const Home: React.FC = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5531999999999'; // Substitua pelo número real
    const message = 'Olá! Gostaria de saber mais sobre as aulas particulares de matemática.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <header className="header">
      <div className="hero-background">
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badges">
              <span className="badge badge-experience">✨ 13+ Anos de Experiência</span>
              <span className="badge badge-location">📍 BH - Online & Presencial</span>
            </div>
            <h1 className="hero-title">
              <span className="title-highlight">Aulas Particulares</span>
              <span className="title-subject">de Matemática</span>
              <span className="title-description">para Ensino Médio e Fundamental II - Online e Presencial (BH)</span>
            </h1>
            <p className="hero-subtitle">
              <span className="subtitle-icon">🎯</span>
              Transforme suas dificuldades em matemática em conquistas! 
              Metodologia personalizada para resultados garantidos no colégio e ENEM.
            </p>
            <div className="hero-features">
              <div className="feature">
                <span className="feature-icon">📚</span>
                <span>Metodologia Personalizada</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🏆</span>
                <span>Resultados Comprovados</span>
              </div>
              <div className="feature">
                <span className="feature-icon">⚡</span>
                <span>Aulas Dinâmicas</span>
              </div>
            </div>
            <div className="cta-section">
              <button className="cta-button" onClick={handleWhatsAppClick}>
                <span className="cta-icon">💬</span>
                <span className="cta-text">
                  <strong>Fale agora comigo no WhatsApp</strong>
                </span>
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-container">
              <div className="image-decoration">
                <div className="decoration-circle circle-1"></div>
                <div className="decoration-circle circle-2"></div>
                <div className="decoration-circle circle-3"></div>
              </div>
              <img 
                 src={professorImage} 
                 alt="Professor Eduardo Borges - Aulas Particulares de Matemática em BH"
                 className="professor-photo"
               />
             </div>
           </div>
         </div>
       </div>
     </header>
   );
 };
 
 export default Home;