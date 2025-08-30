import React from 'react';
import './Benefits.css';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: '🎯',
      title: 'Didática simples e direta',
      description: 'Metodologia que facilita a compreensão dos conceitos matemáticos mais complexos'
    },
    {
      icon: '👨‍🎓',
      title: 'Acompanhamento individualizado',
      description: 'Atenção personalizada para cada aluno, respeitando seu ritmo de aprendizagem'
    },
    {
      icon: '📚',
      title: 'Reforço escolar completo',
      description: 'Preparação para provas, recuperações e melhoria das notas escolares'
    },
    {
      icon: '🎓',
      title: 'Preparação para ENEM',
      description: 'Foco especial na preparação para vestibulares e ENEM com técnicas comprovadas'
    },
    {
      icon: '💻',
      title: 'Aulas online ou presenciais',
      description: 'Flexibilidade total: aulas presenciais em BH ou online de qualquer lugar'
    }
  ];

  return (
    <section className="benefits">
      <div className="container">
        <h2 className="benefits-title">
          Por que escolher as minhas aulas particulares?
        </h2>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">{benefit.icon}</div>
              <h3 className="benefit-title">✅ {benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;