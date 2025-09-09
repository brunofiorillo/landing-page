import React from 'react';
import './CTA.css';

const CTA: React.FC = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5531998928229'; // Número atualizado
    const message = 'Olá! Gostaria de agendar uma aula particular de matemática para meu filho(a). Podemos conversar?';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">
            Vamos ajudar seu filho a melhorar em Matemática?
          </h2>
          <p className="cta-subtitle">
            Não perca mais tempo! Entre em contato agora mesmo e vamos conversar sobre como posso ajudar seu filho a ter sucesso em Matemática.
          </p>
          <p className="cta-contact">
            📞 Entre em contato agora: <strong>(31) 99892-8229</strong>
          </p>
          <div className="cta-benefits">
            <div className="cta-benefit">
              <span className="benefit-icon">⚡</span>
              <span>Resposta rápida</span>
            </div>
            <div className="cta-benefit">
              <span className="benefit-icon">💬</span>
              <span>Conversa sem compromisso</span>
            </div>
            <div className="cta-benefit">
              <span className="benefit-icon">📅</span>
              <span>Agende sua primeira aula</span>
            </div>
          </div>
          <button className="cta-button" onClick={handleWhatsAppClick}>
            📲 Clique aqui e fale comigo no WhatsApp agora mesmo
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;