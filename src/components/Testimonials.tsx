import React from 'react';
import './Testimonials.css';

const Testimonials: React.FC = () => {

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <h2 className="section-title">Depoimento dos Nossos Alunos</h2>
          <p className="section-subtitle">
            Veja o que nossos alunos têm a dizer sobre as aulas particulares. 
            Resultados reais de pessoas que transformaram seu aprendizado conosco.
          </p>
        </div>

        <div className="testimonials-content">
          <div className="video-player">
            <div className="video-container">
              <iframe
                className="main-video"
                src="https://www.youtube.com/embed/wS10Gn1D2js"
                title="Depoimento Completo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;