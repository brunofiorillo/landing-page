import React from 'react';
import './Header.css';
import professorImage from '../images/eduardoBorges.png';

const Header: React.FC = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5531999999999'; // Substitua pelo número real
    const message = 'Olá! Gostaria de saber mais sobre as aulas particulares de matemática.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <header className="header">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Aulas Particulares de Matemática para Ensino Médio e Fundamental II – Online e Presencial (BH)
            </h1>
            <p className="hero-subtitle">
              Mais de 13 anos de experiência ajudando alunos a superar dificuldades em Matemática e alcançar melhores resultados no colégio e no ENEM.
            </p>
            <button className="cta-button" onClick={handleWhatsAppClick}>
              📲 Fale agora comigo no WhatsApp
            </button>
          </div>
          <div className="hero-image">
            <img 
              src={professorImage} 
              alt="Professor Eduardo Borges - Aulas Particulares de Matemática em BH"
              className="professor-photo"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;