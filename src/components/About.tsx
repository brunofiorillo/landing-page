import React from 'react';
import './About.css';
import professorImage from '../images/eduardoBorgesSimples.jpg';

const About: React.FC = () => {
  return (
    <section className="about">
      <div className="container">
        <h2 className="about-title">Quem é o professor?</h2>
        <div className="about-content">
          <div className="about-image">
            <img 
              src={professorImage} 
              alt="Professor Eduardo Borges - Especialista em Matemática"
              className="professor-image"
            />
          </div>
          <div className="about-text">
            <h3 className="professor-name">Eduardo Borges</h3>
            <p className="professor-description">
              Sou Eduardo Borges, professor de Matemática com mais de 13 anos de experiência em aulas particulares e preparação para o ENEM. Já ajudei centenas de alunos a superar dificuldades, recuperar notas e conquistar aprovações em Universidades Federais.
            </p>
            <div className="credentials">
              <div className="credential-item">
                <span className="credential-icon">🎓</span>
                <span className="credential-text">Mais de 13 anos de experiência</span>
              </div>
              <div className="credential-item">
                <span className="credential-icon">👨‍🎓</span>
                <span className="credential-text">Centenas de alunos aprovados</span>
              </div>
              <div className="credential-item">
                <span className="credential-icon">🏆</span>
                <span className="credential-text">Especialista em ENEM e Vestibulares</span>
              </div>
              <div className="credential-item">
                <span className="credential-icon">📍</span>
                <span className="credential-text">Aulas em Belo Horizonte e Online</span>
              </div>
            </div>
            <div className="testimonials">
              <h4 className="testimonials-title">O que os pais dizem:</h4>
              <div className="testimonial">
                <p className="testimonial-text">
                  "Meu filho estava com muita dificuldade em matemática. Com as aulas do Eduardo, não só melhorou as notas como ganhou confiança na matéria!"
                </p>
                <span className="testimonial-author">- Maria Silva, mãe do João (3º ano EM)</span>
              </div>
              <div className="testimonial">
                <p className="testimonial-text">
                  "Excelente professor! Didática clara e muita paciência. Minha filha passou de 4 para 8 em matemática!"
                </p>
                <span className="testimonial-author">- Carlos Santos, pai da Ana (9º ano)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;