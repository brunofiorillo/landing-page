import React from 'react';
import './Services.css';

const Services: React.FC = () => {
  const services = [
    {
      number: '1️⃣',
      title: 'Aulas Particulares de Matemática (Ensino Médio)',
      description: 'Acompanhamento escolar, recuperação de notas, reforço para ENEM.',
      features: [
        'Álgebra e Geometria',
        'Funções e Trigonometria',
        'Estatística e Probabilidade',
        'Preparação para provas'
      ]
    },
    {
      number: '2️⃣',
      title: 'Aulas de Matemática para Fundamental II',
      description: 'Foco em base sólida, prevenção de dificuldades futuras e acompanhamento contínuo.',
      features: [
        'Operações básicas',
        'Frações e Decimais',
        'Geometria fundamental',
        'Resolução de problemas'
      ]
    },
    {
      number: '3️⃣',
      title: 'Mentoria Matemática ENEM (Foco em 800+)',
      description: 'Para alunos que querem desempenho acima da média e aprovação em cursos concorridos.',
      features: [
        'Técnicas de resolução rápida',
        'Simulados direcionados',
        'Análise de questões anteriores',
        'Estratégias de prova'
      ]
    }
  ];

  const handleWhatsAppClick = (serviceTitle: string) => {
    const phoneNumber = '5531999999999'; // Substitua pelo número real
    const message = `Olá! Gostaria de saber mais sobre: ${serviceTitle}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="services">
      <div className="container">
        <h2 className="services-title">Serviços Oferecidos</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-number">{service.number}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="service-feature">
                    ✓ {feature}
                  </li>
                ))}
              </ul>
              <button 
                className="service-cta"
                onClick={() => handleWhatsAppClick(service.title)}
              >
                Saiba mais
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;