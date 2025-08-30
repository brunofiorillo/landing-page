import React, { useState, useRef, useEffect } from 'react';
import './Testimonials.css';

// Lista dos vídeos disponíveis na pasta videos
const testimonialVideos = [
  {
    id: 1,
    title: 'Depoimento - Franciele Rabelo',
    filename: 'FRANCIELE OFICIAL.mp4',
    description: 'Veja como as aulas particulares transformaram o aprendizado da Franciele'
  },
  {
    id: 2,
    title: 'Depoimento - Paulo Leite',
    filename: 'PAULO LEITE.mp4',
    description: 'Paulo compartilha sua experiência com as aulas personalizadas'
  },
  {
    id: 3,
    title: 'Benefícios das Aulas Particulares',
    filename: 'depoimento benefícios oficial.mp4',
    description: 'Descubra todos os benefícios das aulas particulares'
  },
  {
    id: 4,
    title: 'Depoimento Completo',
    filename: 'DEPOIMENTO OFICIAL enxuto.mp4',
    description: 'Um depoimento completo sobre a metodologia de ensino'
  }
];

const Testimonials: React.FC = () => {
  const [currentVideo, setCurrentVideo] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoSelect = (index: number) => {
    console.log('Video selecionado:', index, testimonialVideos[index].title);
    setCurrentVideo(index);
    setIsPlaying(false);
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  // UseEffect para garantir que o vídeo seja atualizado quando currentVideo mudar
  useEffect(() => {
    console.log('Vídeo carregado:', testimonialVideos[currentVideo].title);
    setIsPlaying(false);
  }, [currentVideo]);

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <h2 className="section-title">Depoimentos dos Nossos Alunos</h2>
          <p className="section-subtitle">
            Veja o que nossos alunos têm a dizer sobre as aulas particulares. 
            Resultados reais de pessoas que transformaram seu aprendizado conosco.
          </p>
        </div>

        <div className="testimonials-content">
          <div className="video-playlist">
            <h4 className="playlist-title">Escolha um Depoimento</h4>
            <div className="playlist-items">
              {testimonialVideos.map((video, index) => (
                <div 
                  key={video.id}
                  className={`playlist-item ${index === currentVideo ? 'active' : ''}`}
                  onClick={() => handleVideoSelect(index)}
                >
                  <div className="playlist-thumbnail">
                    <div className="thumbnail-placeholder">
                      <span className="play-icon">▶️</span>
                    </div>
                  </div>
                  <div className="playlist-info">
                    <h5 className="playlist-item-title">{video.title}</h5>
                    <p className="playlist-item-description">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="video-player">
            <div className="video-container">
              <video
                key={currentVideo}
                ref={videoRef}
                className="main-video"
                onEnded={handleVideoEnd}
                onPlay={handleVideoPlay}
                onPause={handleVideoPause}
                controls
                preload="metadata"
              >
                <source 
                  src={`/videos/${encodeURIComponent(testimonialVideos[currentVideo].filename)}`} 
                  type="video/mp4" 
                />
                Seu navegador não suporta o elemento de vídeo.
              </video>
              
              <div className="video-overlay">
                <button 
                  className={`play-button ${isPlaying ? 'playing' : ''}`}
                  onClick={togglePlayPause}
                  aria-label={isPlaying ? 'Pausar vídeo' : 'Reproduzir vídeo'}
                >
                  {isPlaying ? '⏸️' : '▶️'}
                </button>
              </div>
            </div>
            
            <div className="video-info">
              <h3 className="video-title">{testimonialVideos[currentVideo].title}</h3>
              <p className="video-description">{testimonialVideos[currentVideo].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;